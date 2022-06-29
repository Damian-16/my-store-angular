import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  private names = 'nombre privado ';
  name = 'Nicolas';
  age = 28;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person={
    name:'Damian',
    age:29,
  }

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
}
