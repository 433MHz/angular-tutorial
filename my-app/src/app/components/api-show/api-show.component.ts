import { Component, OnInit } from '@angular/core';
import {RootObject, ApiReaderService} from '../../services/api-reader.service'

@Component({
  selector: 'app-api-show',
  templateUrl: './api-show.component.html',
  styleUrls: ['./api-show.component.css']
})
export class ApiShowComponent implements OnInit {

  allData: RootObject

  constructor(private api: ApiReaderService) { }

  ngOnInit(): void {
    this.api.getApi().subscribe(value => {
      this.allData = value;
    })
  }

}
