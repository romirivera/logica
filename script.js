const numeroAdivinanza = Math.floor(Math.random() * 100) + 1;
const listaNumeros = [];
function adivinanza() {
  let numero = null;
  while (numero !== numeroAdivinanza) {
    let adivinar = prompt('adivina un número del 1 al 100: ');
    numero = Number(adivinar);
    if (isNaN(numero) || adivinar.trim() === '') {
      console.log('error, no has ingresado un valor numérico');
      alert('Error: Debes ingresar un número válido.');
      continue;
    }
    listaNumeros.push(numeroAdivinanza);
    if (numero === numeroAdivinanza) {
      console.log('Felicidades, adivinaste el número secreto');
      console.log('Has intentado: ' + listaNumeros.join(','));
      document.getElemenById('resultado').innerHTML;
      `Felicidades, adivinaste el número secreto.<br>
        Tus intentos: ${listaNumeros.join(', ')}
      `;
    } else {
      console.log('Ups, el número secreto es incorrecto, vuelve a intentarlo.');
      alert('Ups, el número secreto es incorrecto, vuelve a intentarlo.');
    }
  }
}
adivinanza();
