// Make a cart with a hardcoded number at the end

import React, { Component } from "react";

class CartWidget extends Component {
  render() {
    return (
      // Mostrar el carrito al final del navbar
      <div>
        <i class="fas fa-shopping-cart"></i>
        <h5>2</h5>
      </div>
    );
  }
}

export default CartWidget;
