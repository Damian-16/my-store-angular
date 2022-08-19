import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  // @Input() img: string='';
   img: string = '';
  @Input('img')//para que en el componente hmtl [img] siga funcionando con ese nombre
  set changeImg( newImg: string ){
    this.img = newImg;
    console.log('change just img=>', this.img)//esta es la otra tecnica para mostrar de forma especifica como cambia los estados,muestra su estado previo y el nuevo
  }
  imageDefault = './assets/images/default.png';
  @Output() loaded = new EventEmitter();
  //comunicamos al padre con output poniendo una instancia de eventemiter
  counter = 0;
  counterFn : number | undefined;


  constructor() {
    //before render
    // NO async --once time (una sola vez)
    console.log('constructor','imgValue=>',this.img)
   }
   ngOnChanges(changes:SimpleChanges) {
    //before render
    //changes inputs -- times(las veces q  se actualice el valor)
    console.log('ngOnChanges','imgValue=>',this.img)
    console.log(changes); //de esta manera sabremos cada vez que haya un cambio
    //para saber un cambio especificos podriamos acceder con changes.img x ejemplo o bien el metodo de la linea 15


   }

  ngOnInit(): void {
    //before render
    //async - fetch ,promises,apis  --once time (una vez)
    console.log('ngOnInit','imgValue=>',this.img)
    this.counterFn = window.setInterval(()=>{
      this.counter += 1
      console.log("run counter")
      //si guardaramos esto sin una variable ene ste caso counterFn esto seguiria corriendo pa toda la vida a pesarr de apagarlo con el evento de toggle
    },1000)
  }
  ngAfterViewInit(): void {
    //after render
    //handler children

    console.log('ngAfterViewInit','imgValue=>',this.img)
  }
  ngOnDestroy(){
    //delegates
    console.log('ngOnDestroy','imgValue=>',this.img);
    window.clearInterval(this.counterFn);// de esta manera matamos el counterFn
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
