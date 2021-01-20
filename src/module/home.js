import create from './functions.js'

function home(){
  const content = 
  `
  <h1>OUR SPECIALTIES</h1>

  The Robalo’Océan Restaurant offers refined Mediterranean cuisine.

  Specialties of fish, shellfish and crustaceans from the Mediterranean and the Atlantic,
  
  authentic Mediterranean recipes, full of sun, with multiple flavors make up the menu.
  
  Small preview ...
  `;
  create('div', 1, "", "",'id', "home", "#content");

  create('div', 1, "", "img",'', "", "#home");
  create('img', 1, "", "imges",'src', './img/img5.jpg', ".img");


  create('div', 1, "", "intro",'', "", "#home");

  create('p', 1, content, "",'', "", ".intro");
}

export default home;

