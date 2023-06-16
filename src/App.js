import React from "react";
import Cart from "./Cart";
import Navbar from "./NavBar";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
       products: [
        {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
            id: 1
        },
        {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
            id: 2
        },
        {
            price: 999,
            title: 'Laptop',
            qty: 1,
            img: 'https://plus.unsplash.com/premium_photo-1681566925246-cc584a44d7fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            id: 3
        },
       ]
    }   
}
handleIncreaseQuantity = (product) => {
  console.log('Hey please inc the qty of ', product);
  const { products } = this.state;
  const index = products.indexOf(product);

  products[index].qty += 1;

  this.setState({
      products
  })
}

handleDecreaseQuantity = (product) => {
  console.log('Hey please inc the qty of ', product);
  const { products } = this.state;
  const index = products.indexOf(product);

  if(products[index].qty == 0){
      return;
  }

  products[index].qty -= 1;

  this.setState({
      products
  })
}

handleDeleteProduct = (id) => {
  const { products } = this.state;

  const items = products.filter((item) => item.id !== id); //[{}]

  this.setState({
      products: items
  })
}

getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price;
  })

  return cartTotal;
}

render(){
  const { products } = this.state;
  return (
    <div className="App">
     <Navbar count={this.getCartCount()}/>
     <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
     />
     <div style={ {fontSize:20, padding:10} }>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
 
}

export default App;
