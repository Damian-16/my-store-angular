import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input('img') img: string='';
  imageDefault = './assets/images/default.png';
  @Output() loaded = new EventEmitter();
  //comunicamos al padre con output poniendo una instancia de eventemiter
    constructor() { }

  ngOnInit(): void {
  }
  imgError(){
    this.img = this.imageDefault;
  }
 imgLoaded(){
  console.log("log hijo");
  // de esta manera mandamos la variable img al padre
  this.loaded.emit(this.img);
 }
}
