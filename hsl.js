const button= document.getElementById('btn');
const color= document.querySelector('.color');

button.addEventListener('click',function(){
    let h= Math.floor(Math.random() * 361);
    let s= Math.floor(Math.random() * 101);
    let l= Math.floor(Math.random() * 101);
    let hslColour= `hsl(${h}, ${s}%, ${l}%)`;
    console.log(hslColour);

    document.body.style.backgroundColor = hslColour;
    color.textContent= hslColour;
})