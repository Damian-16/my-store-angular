import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
  getAllProducts() {
   return this.http.get<Product[]>('https://fakestoreapi.com/products')
   // de esta manera esperamos que el get sea de tipo product[] para q no haya conflicto al recibirlo
  }
}
