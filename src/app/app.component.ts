import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as restData from './services/task.json';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  
  title: string = ''
  tableBody: Array<any> = []
  searchText: string = '';
  previous: string;

   constructor(private cdRef: ChangeDetectorRef){ }

   @HostListener('input') oninput() {
    this.searchItems();
  }

   ngOnInit(){
     //extract the title from task.json
     this.title = restData.headline;

     //extract the tableData array from task.json and add it to the body array
    this.tableBody = Array.from(Object.keys(restData.tableData), k=> restData.tableData[k] );

    console.log(this.tableBody)

    this.mdbTable.setDataSource(this.tableBody);
    this.previous = this.mdbTable.getDataSource();
    this.tableBody = this.mdbTable.getDataSource();
   }

   ngAfterViewInit(){
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
   }

   searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.tableBody = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.tableBody = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

    
  
}
