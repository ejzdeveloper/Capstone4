var items = [];
var prices = [];
var counter = 0;
var total = 0;
function cart(){
  var theSpan = document.getElementById('display');
  theSpan.innerHTML += items[counter-1] + " $" + prices[counter-1] + '<br>';
}

function checkout(){
  var aSpan = document.getElementById('total');
  aSpan.innerHTML = "$" + total;
}
function onClick(item, price){
  items.push(item);
  prices.push(price);
  total+=Number(price);
  counter++;
  cart();
}//show cart

