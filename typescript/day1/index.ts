let apiCallNumber:number=0;
let isLoading:boolean=false;
const pokemonTypesObject:object={};
let pokemonApiUrl:string|null='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
const button=document.querySelector('button') as HTMLButtonElement;
const select=document.getElementById('selectType') as HTMLSelectElement;
const searchInput=document.getElementById('searchInput') as HTMLInputElement;
let selectedValue:string="" ;
let searchValue:string="";
interface PokemonDataInterface{
    name:string,
    id:string,
    image:string,
    types:string
}
const pokemonData:PokemonDataInterface[]=[];

button.addEventListener('click',async():Promise<void>=>{
    if(!isLoading){
        button.textContent='Loading...';
        await fetchData();
        button.textContent='Load more';
    }
})

async function fetchData():Promise<void>{
    if(!isLoading&&pokemonApiUrl!=null){
        isLoading=true;
        await fetch(pokemonApiUrl).then((res):Promise<any>=>res.json()).then(async(res:{next:string,results:{url:string}[]}):Promise<void>=>{
            pokemonApiUrl=res.next;
            let requests=res.results.map(async({url}):Promise<PokemonDataInterface>=> {
                let res:Response=await fetch(url);
                let pokemonDetails:{
                    name:string,
                    id:string,
                    sprites:{
                        front_default:string
                    },
                    types:[{type:{name:string}}]
                }=await res.json();
                let pokemon:PokemonDataInterface={
                    name:pokemonDetails.name,
                    id:pokemonDetails.id,
                    image:pokemonDetails.sprites.front_default,
                    types:pokemonDetails.types.map(({type}:{type:{name:string}})=>{
                        pokemonTypesObject[type.name.toLowerCase()]=1;
                        return type.name.toLowerCase();
                    }).join(" ")
                }
                pokemonData.push(pokemon);
                return pokemon;
            });
            await Promise.all(requests);

            displayData(pokemonData);
            isLoading=false;
            addSelectTypes()
        }).catch((err)=>{
            isLoading=false;
            console.error(err.message);
        })
        
    }
}

function displayData(pokemonData:PokemonDataInterface[]):void{
    if(selectedValue!=null){
        pokemonData=pokemonData.filter(pokemon=>pokemon.types.includes(selectedValue));
    }
    if(searchValue!=null){
        pokemonData=pokemonData.filter(pokemon=>pokemon.name.toLowerCase().includes(searchValue));
    }
    const pokemonContainer=document.getElementById("pokemonContainer")as HTMLElement;
    pokemonContainer.innerHTML='';
    pokemonData.forEach(pokemon=>{
        let div=document.createElement('div') as HTMLDivElement;
        div.className='flip-card';
        div.innerHTML= `<div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${pokemon.image}" alt="${pokemon.name}" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h2>${pokemon.name}</h2>
            <p>Types: ${pokemon.types}</p>
        </div>
      </div>z
     `;
        pokemonContainer.appendChild(div);
    });
}

function addSelectTypes(){
    let option=document.createElement('option')as HTMLOptionElement;
        option.text="Select Type";
        option.value="";
        select.append(option);
    Object.keys(pokemonTypesObject).forEach(type=>{
        let option=document.createElement('option')as HTMLOptionElement;
        option.text=type;
        option.value=type;
        select.append(option);
    })
    select.style.display='block';
}

select.addEventListener('change', function(){
    selectedValue=select.value;
    displayData(pokemonData)
});

searchInput.addEventListener('input', function(){
     searchValue=searchInput.value.toLowerCase();
    displayData(pokemonData)
});

fetchData()
