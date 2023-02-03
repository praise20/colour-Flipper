const button= document.getElementById('btn');
const color= document.querySelector('.color');

button.addEventListener('click',function(){
    let r= Math.floor(Math.random() * 256);
    let g= Math.floor(Math.random() * 256);
    let b= Math.floor(Math.random() * 256);
    let rgbColour= `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColour);

    document.body.style.backgroundColor = rgbColour;
    color.textContent= rgbColour;
})