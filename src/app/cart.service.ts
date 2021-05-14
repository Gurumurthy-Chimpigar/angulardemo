import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = [];
  constructor(private httpClient: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }
  getCart() {
    // return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
