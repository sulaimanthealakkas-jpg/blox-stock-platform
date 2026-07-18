async function loadStock(){

const response=await fetch("http://localhost:3000/api/stock");

const data=await response.json();

console.log(data);

}

loadStock();

setInterval(loadStock,300000);
