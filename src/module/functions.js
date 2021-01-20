
export default function create(t,l,text="",c="",id="",v="",p){
  const parent = document.querySelector(p);
  for (let index = 0; index < l; index++) {
    const element = document.createElement(t);
    if(text!="") element.innerHTML = `${text}`;
    if(c!="") element.classList += `${c}`;
    if(id!="") element.setAttribute(`${id}`,`${v}`);
    const p = parent.appendChild(element);
    return p;
  }
}



