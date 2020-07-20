//MOBILE MENU
var elem=document.querySelector(".opennav");

elem.addEventListener ("click",function (){

document.querySelector("#mynav").style.width="100%";

}
);


document.querySelector(".close").addEventListener ("click",function (){

document.querySelector("#mynav").style.width="0%";

}
);

document.querySelector(".clz").addEventListener ("click",function (){

document.querySelector("#mynav").style.width="0%";

}
);




//MIXITUP
var mixer=mixitup(".container");



