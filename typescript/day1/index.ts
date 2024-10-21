let apiCallNumber=0;
let isLoading=false;
const pokemonTypesObject={};
let pokemonApiUrl='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
const button=document.querySelector('button')as HTMLButtonElement;
const select=document.getElementById('selectType') as HTMLSelectElement;
const searchInput=document.getElementById('searchInput') as HTMLInputElement;
let selectedValue="" ;
let searchValue=""
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
        await fetch(pokemonApiUrl).then((res):Promise<any>=>res.json()).then(async(res):Promise<any>=>{
            pokemonApiUrl=res.next;
            let requests=await res.results.map(async({url}):Promise<PokemonDataInterface>=> {
                let res=await fetch(url);
                let pokemonDetails=await res.json();
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
        let div=document.createElement('div');
        div.className='flip-card';
        div.innerHTML= `<div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${pokemon.image}" alt="${pokemon.name}" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h2>${pokemon.name}</h2>
            <p>Types: ${pokemon.types}</p>
        </div>
      </div>
     `;
        pokemonContainer.appendChild(div);
    });
}

function addSelectTypes(){
    select.innerHTML='<option value="">Select Type</option>';
    Object.keys(pokemonTypesObject).forEach(type=>{
        let option=document.createElement('option');
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
