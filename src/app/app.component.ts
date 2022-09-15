import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent: string = 'valor escuchado con ngmodel';
//https://www.w3schools.com/howto/img_avatar.png
  img: string = '';
  onLoaded(img:'string'){
    console.log("log padre",img);
    //el padre esta escuchando al hijo cuando este publique ese evento
    //se recibe la variable img y la metemos en un console
  }


  //pipes de fecha (los pipes solo se utilizan en render NO AQUI)
  today = new Date();
  otherDate = new Date(1992,9,21);
  }
