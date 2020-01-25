import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { API_URL } from './env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.get();
  }

  title = 'climate';

  data;

  get() {
    const req = this.http.get(`${API_URL}/info`).subscribe(data => {
      this.data = data;
    })
  }
}
