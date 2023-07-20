import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

// con este servicio ustilizamos la logica que sea reutilizable

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  total = 0;
  constructor() {}

  addProduct(product: Product) {
    this.myShoppingCart.push(product); //agregamos productos al carrito
  }
  removeProduct(product: Product) {
    const index = this.myShoppingCart.indexOf(product);
    if (index !== -1) {
      this.myShoppingCart.splice(index, 1);
    }
  }
  getShoppingCart() {
    return this.myShoppingCart;
  }
  getTotal() {
    return (this.total = Number(
      this.myShoppingCart.reduce((sum, item) => sum + item.price, 0).toFixed(2)
    )); //de esta manera sumamos el total tambien otra manera de hacerlo es this.total += product.price;
  }
}
