import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product : Product = {
    id:'',
    price:0,
    title:'',
    image:'',
    description:'',
    category:'',
  }
  //siempre se inicializa pues si se deja vacio da error

  @Output() addedProduct = new EventEmitter();
  //este es el objeto q  le mandaremos al padre

  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart() {
   this.addedProduct.emit(this.product)
  }

}
