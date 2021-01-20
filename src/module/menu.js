import create from './functions.js'
import content from './content'

function menu(){
  create('div', 1, "", "",'id', "menu", "#content");
  menuContent('menu6', "./img/download (2).jpg",'Huîtres de Dakhla');
  menuContent('menu4', "./img/images.jpg",'Omelet');
  menuContent('menu5', "./img/download (1).jpg",'Briwat & Tea');
  menuContent('menu7', "./img/images (3).jpg",'Mokhito');
  menuContent('menu1', "./img/download.jpg",'Fish Tagine');
  menuContent('menu2', "./img/images (1).jpg",'Meat Tagine');
  menuContent('menu3', "./img/images (2).jpg",'Fried Fish');
}
// create menu list when click event happened
const entreesList = (contents) => {

  create('div', 1, contents, "list1",'', "", "#menu");

}

const menuContent = (classes='',img='',title) => {
  create('div', 1, "", classes,'', "", "#menu");
  create('img', 1, "", "",'src', img, `.${classes}`);
  create('h3', 1, title, classes,'', "", `.${classes}`);
}
export default menu;
