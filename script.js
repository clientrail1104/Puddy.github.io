window.addEventListener(
"scroll",
function(){

let title=document.querySelector(".hero h1");

let position=window.scrollY;

title.style.transform=
`translateY(${position*0.3}px)`;

});
