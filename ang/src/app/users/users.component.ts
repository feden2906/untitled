import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => {
      console.log(value);
    })
  }

}
