import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { API_URL } from '../env';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.get();
  }

  data: any = [{}];

  displayedColumns: string[] = ['temperature', 'humidity', 'gps'];
  dataSource: any;

  get() {
    const req = this.http.get(`${API_URL}/info`).subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
