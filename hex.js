const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button= document.getElementById('btn');
const color= document.querySelector('.color');

button.addEventListener("click", function(){
    let hexColour= "#";
    for(i= 0; i < 6; i++){
        let randomNumber= Math.floor(Math.random() * hex.length);
        hexColour += hex[randomNumber];
        console.log(hexColour);
    }
        document.body.style.backgroundColor = hexColour;
        color.textContent= hexColour;
})
