let apiCallNumber=0;
let isLoading=false;
const pokemonTypesObject={};
let pokemonApiUrl='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
const button=document.querySelector('button');
const select=document.getElementById('selectType');
const searchInput=document.getElementById('searchInput');
let selectedValue="";
let searchValue=""

const pokemonData=[];

button.addEventListener('click',async(button)=>{
    if(!isLoading){
        button.target.textContent='Loading...';
        await fetchData();
        button.target.textContent='Load more';
    }
})

async function fetchData(){
    if(!isLoading&&pokemonApiUrl!=null){
        isLoading=true;
        await fetch(pokemonApiUrl).then((res)=>res.json()).then(async(res)=>{
            pokemonApiUrl=res.next;
            let requests=await res.results.map(async({url})=> {
                let res=await fetch(url);
                let pokemonDetails=await res.json();
                let pokemon={
                    name:pokemonDetails.name,
                    id:pokemonDetails.id,
                    image:pokemonDetails.sprites.front_default,
                    types:pokemonDetails.types.map(({type})=>{
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

function displayData(pokemonData){
    if(selectedValue!=null){
        pokemonData=pokemonData.filter(pokemon=>pokemon.types.includes(selectedValue));
    }
    if(searchValue!=null){
        pokemonData=pokemonData.filter(pokemon=>pokemon.name.toLowerCase().includes(searchValue));
    }
    document.getElementById("pokemonContainer").innerHTML='';
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
        document.getElementById('pokemonContainer').appendChild(div);
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

select.addEventListener('change', function(e){
    selectedValue=e.target.value;
    displayData(pokemonData)
});

searchInput.addEventListener('input', function(e){
     searchValue=e.target.value.toLowerCase();
    displayData(pokemonData)
});

fetchData()
