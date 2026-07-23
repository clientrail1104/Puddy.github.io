window.addEventListener(
"scroll",
()=>{

let device =
document.querySelector(".device");


device.style.transform =
`rotateY(${window.scrollY/20}deg)`;

});
