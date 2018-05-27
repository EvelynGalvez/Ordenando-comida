do  
cant = prompt('¿Cuántos platos hay disponibles en el menú?');

while (cant % 1 != 0)

i=0;
arrPlatos = [];
while (i < cant){
    arrPlatos[i] = prompt('Ingrese plato disponible');
    i++;
}

function chooseFood() {
    if (arrPlatos.indexOf('ceviche') != -1) {
        alert('Elijo ceviche');
    } else if (arrPlatos.indexOf('tacos al pastor') != -1) {
        alert('Elijo tacos al pastor');
    } else if (arrPlatos.indexOf('empanada chilena') != -1) {
        alert('Elijo empanada chilena');
    } else {
        alert('Sólo una hamburguesa');
    }
}
console.log(chooseFood());
