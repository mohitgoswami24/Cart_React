import React from "react";

const CartItem = (props) => {
    
    const { price, title, qty } = props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props
        
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions"> 
                       {/* {Buttons} */}
                       <img 
                          alt="increase" 
                          className="action-icons" 
                          src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                          onClick={() => props.onIncreaseQuantity(props.product)}
                        />
                       <img 
                          alt="decrease" 
                          className="action-icons" 
                          src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                          onClick={() => props.onDecreaseQuantity(props.product)}
                        />
                       <img
                          alt="delete" 
                          className="action-icons" 
                          src="https://cdn-icons-png.flaticon.com/128/484/484662.png" 
                          onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        )
}

const styles = {
    image: {
        height: 128,
        width: 122,
        borderRadius: 5,
        backgroundColor: '#ccc',
    }
}

export default CartItem;