import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{name}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'its working';
  name = 'Krystian Izdebski';
}
