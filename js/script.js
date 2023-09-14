// 1 Prendo i miei elementi 

// 2 creo un ciclo while che non si interrompe finchè non ha stampato tutti i prodotti




const outputTag = document.getElementById('output');
const listaSpesa = ['latte' , 'sale' , 'zucchero' , 'pane'];
let i = 0;

while(i < listaSpesa.length){
  console.log(listaSpesa[i]);
  const element = listaSpesa[i];
  i++;
  outputTag.innerHTML += `<li>${element}</li>` 
}


