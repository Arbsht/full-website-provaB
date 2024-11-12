import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
standalone:true
})
export class AppComponent implements OnInit{
title(title: any) {
  throw new Error('Method not implemented.');
}
results: any[]=[];
// Inject HttpClient into your component or service.
constructor(private http: HttpClient) {}
ngOnInit(): void {
// Make the HTTP request:
this.http.get('http://localhost:3000/api').subscribe((data: any) => {
// Read the result field from the JSON response.
this.results = data.results;
});
}
}