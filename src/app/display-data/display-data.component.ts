import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DataList, DataServiceService} from "../data-service.service";
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  observableData! : Observable<DataList>;
  data!: DataList[];
  errorMessage = '';

  columnDefs: ColDef[] = [
    { field: 'fund', sortable: true, filter: true },
    { field: 'strategy', sortable: true, filter: true },
    { field: 'desk', sortable: true, filter: true },
    { field: 'key', sortable: true, filter: true },
    { field: 'value', sortable: true, filter: true }
  ];

  rowData!: Observable<any>;

  constructor(private dataService: DataServiceService) {
    this.rowData = this.dataService.getData().pipe();
    // this.rowData = this.dataService.getData().pipe();
    /*
    this.rowData.subscribe(
      data => this.data = data,
      error => this.errorMessage = error);*/
  }

  ngOnInit(): void {
  }
}
