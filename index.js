var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
   var name = {itemName:item, itemPrice: (Math.floor(Math.random()* Math.floor(100)))}
   getCart().push(name)
   return `${name.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length < 1){
    return `Your shopping cart is empty.`;
  }
  var string = "In your cart, you have ";
  //var items = `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
    //cart.push(items);
    var formattedCart = []
    for (var i = 0; i < cart.length; i++){

    formattedCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length === 1){
    return (string + formattedCart.join(", ") + '.');
  } else if (cart.length === 2){
    var end = formattedCart.pop();
    return (`${string} ${end}, and ${formattedCart}`);
  } 
};

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
