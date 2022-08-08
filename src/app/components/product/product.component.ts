import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product : Product = {
    id:'',
    price:0,
    name:'',
    image:'',
  }
  //siempre se inicializa pues is se deja vacio da error

  constructor() { }

  ngOnInit(): void {
  }

}
