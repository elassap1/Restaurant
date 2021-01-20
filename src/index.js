import _, { remove } from 'lodash';
import './style.scss';
//import './img/'
import home from './module/home'
import menu from './module/menu'
import contact from './module/contact'
import create from './module/functions'

import nav from './module/nav'

home();

// display home when click event happened
const navHome = document.querySelector('.home');

navHome.onclick = () => {
  const count = document.querySelectorAll('#home').length;
  if(count == 0){
    const menuElement = document.querySelectorAll('#menu');
    if(menuElement.length !=0){
      menuElement[0].parentNode.removeChild(menuElement[0]);
    }

    const contactElement = document.querySelectorAll('#contact');
    if(contactElement.length != 0){
      contactElement[0].parentNode.removeChild(contactElement[0]);
    }
    home();
  }
};

// display contact when click event happened
const navContact = document.querySelector('.contact');

  navContact.onclick = () => {
    const count = document.querySelectorAll('#contact').length;
    if(count == 0){
      const homeElement = document.querySelectorAll('#home');
      if(homeElement.length !=0){
        homeElement[0].parentNode.removeChild(homeElement[0]);
      }

      const menuElement = document.querySelectorAll('#menu');
      if(menuElement.length != 0){
        menuElement[0].parentNode.removeChild(menuElement[0]);
      }
      contact();
    }
  };

// display menu when click event happened
const navMenu = document.querySelector('.menu');

  navMenu.onclick =  () => {
    const count = document.querySelectorAll('#menu').length;
    if(count == 0){
      const homeElement = document.querySelectorAll('#home');
      if(homeElement.length !=0){
        homeElement[0].parentNode.removeChild(homeElement[0]);
      }

      const contactElement = document.querySelectorAll('#contact');
      if(contactElement.length != 0){
        contactElement[0].parentNode.removeChild(contactElement[0]);
      }
      menu();
    }
  };




