const apiUrl = 'https://pokeapi.co/api/v2/';

// -- Afficher / cacher les sections --
function hideDiv(){
	var elements = document.getElementsByClassName("div-content"); // or:
	for (var index = 0; index < elements.length; index++) {
	    elements[index].style.display = 'none';
	    // console.log("ok " + index)
	}
}

function getContent(content) {
	hideDiv();
	var element = document.getElementById(content);
	element.style.display = "block";
}
// ------------------------------------

function getJson(elem, idOrName){
	let url = apiUrl + elem + '/'
	if (idOrName != null) {
		url += idOrName + '/' ;
	}
	window.fetch(url)
	.then(res => res.json())
	.then(json => {
		switch (elem) {
		  case 'pokemon':
		    screenPokemon(json);
		    break;
		  case 'berry':
		    screenBerries(json);
		    break;
		  default:
		    console.log(`Sorry, something goes wrong...`);
	}})
	.catch(err => { throw err });
}

// -- Afficher des Pokémons --
function getInputPokemon(){
	inputPokemon = document.getElementById("inputUserPokemon").value;
	getJson("pokemon", inputPokemon.toLowerCase());
}

function screenPokemon(pokemon){
	console.log("Pokemon : "+pokemon.name);
	document.getElementById("pokemonDivID")
 			.innerText="Le Pokémon sélectionné est "
 			+pokemon.name
 			+' (N° '+pokemon.id+')'
 			+".";
}
// ----------------------------



// -- Affichage des baies --
function screenBerries(berries) {
	berries = berries.results
	console.log("Liste des baies " + berries);

	var div = document.getElementById("berriesDiv");
	var form =document.createElement("form");
	var label = document.createElement("label");
		label.innerText = "Choisir une baie\n" ;
		label.for = "berry-select";
	var select = document.createElement("select");
		select.innerText = "";
		select.id = "selectUserBerry";
	var o = document.createElement("option");
			o.innerText= "-- Choisir une baie";
			o.value = "";
		select.appendChild(o);

	for (var i =0 ; i < berries.length; i++){
		var opt = document.createElement("option");
			opt.innerText= "" + berries[i].name;
			opt.value = berries[i].name;
			console.log("Baie à baie : " + berries[i].name);
		select.appendChild(opt);
	}
	// var btn = document.createElement("input");
	// 	btn.innerText = "";
	// 	btn.value = "Valider";
	// 	btn.type = "submit";
	// 	btn.id = "sendBerry";
	// document.getElementById("sendBerry").addEventListener("click", screenBerry(berries));

	form.appendChild(label);
	form.appendChild(document.createElement("br"));
	form.appendChild(select);
	// form.appendChild(btn);
    div.appendChild(form);
	
}

function screenBerry() {
	console.log("dans le screenberry");
	var berry = document.getElementById("selectUserBerry").value;
	document.getElementById("berryDiv")
 			.innerText="La baie sélectionnée est "
 			+berry.name;
}
// -------------------------




hideDiv();
console.log("Premier coucou!");