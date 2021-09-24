
for (var i = 0; i < pokemons.length; i++) {
    
    var card = document.createElement("div");
    card.classList.add('row', 'w-25', 'bg-light', 'border', 'border-1', 'rounded','d-flex','flex-column','align-items-center','text-center','p-3','mb-1');
    box.appendChild(card);
    
    var img = document.createElement("img");
    img.src = pokemons[i].img;
    card.appendChild(img);
    
    // console.log(img);
    var pokemon_name = document.createElement("div");
    pokemon_name.textContent = 'Name: ' + pokemons[i].name;
    pokemon_name.classList.add('h5')
    card.appendChild(pokemon_name);
    
    var pokemon_type = document.createElement("div");
    pokemon_type.textContent = 'Type: ' + pokemons[i].type;
    pokemon_type.classList.add('h6','m-0')
    card.appendChild(pokemon_type);
    
    var like = document.createElement("button");
    like.classList.add('btn', 'btn-primary', 'mt-3');
    like.setAttribute('id', pokemons[i].id)
    like.textContent = 'Like';
    card.appendChild(like);
}

var likesData = []

var btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', btnListener)
})

function btnListener(e) {
    var {id} = e.target
    if (likesData.includes(id)) {
        likesData.pop(id)
        likes.textContent = 'Number of liked pokemons: ' + likesData.length;
    } else {
        likesData.push(id)
        likes.textContent = 'Number of liked pokemons: ' + likesData.length;
}
}


