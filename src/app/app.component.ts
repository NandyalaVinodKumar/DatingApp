import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponeOnInit implements OnInit {
  title = 'The Dating App';
  users:any;

  constructor(private http:HttpClient) {}
  ngOnInit() {
   this.getusers();
  }
  getusers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users=response
     },error =>{
        console.log(error);
     })
  }
}
