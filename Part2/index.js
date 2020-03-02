let id = document.getElementById('idInput');
let newColor = document.getElementById('colorInput');
console.log(id)
console.log(color)

function setCard(){
    let input = newColor.value;
    
    let newId = document.getElementById(idInput.value);

    newId.style.color = input ;
}