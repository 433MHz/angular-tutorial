import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage...";
  textData = "This is from .ts";
  textDisabled = true;
  alertMe(){
    alert('Helllo');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
