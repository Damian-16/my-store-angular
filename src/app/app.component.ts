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
  img = 'https://source.unsplash.com/random'
}
