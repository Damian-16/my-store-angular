import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  private names = 'nombre privado ';
  name = 'Nicolas';
  age = 28;
  img = 'https://source.unsplash.com/random';
  widthImg = 10;

  btnDisabled = true;
  person={
    name:'Damian',
    age:29,
  }
 namess: string[]=['Nico','Juli','sonic'];
 newName = '';


  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }
  onScroll(event: Event){
 const element = event.target as  HTMLElement;
 console.log(element.scrollTop)
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.namess.push(this.newName);
    this.newName = '';
   }
  deleteName(index: number){
    this.namess.splice(index , 1) // el valor a eliminar y cuantos voy a  eliminar a partir de
  }





  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  }
