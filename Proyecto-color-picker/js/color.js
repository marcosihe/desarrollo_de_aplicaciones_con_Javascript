const color = document.querySelector('#color');
const salida = document.querySelector('#salida');

color.addEventListener('input', () => {
    const value = color.value;
    let asignarValue = (colorValue) => {
        salida.innerHTML = value;
        salida.style.background = value;
        salida.style.color = colorValue;
    }
    if(value == '#ffffff'){
        asignarValue('#000000');
    }else{
        asignarValue('#ffffff');
    }
});