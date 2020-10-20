import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UploadHistorysDataSource, UploadHistorysItem } from './upload-historys-datasource';

@Component({
  selector: 'app-upload-historys',
  templateUrl: './upload-historys.component.html',
  styleUrls: ['./upload-historys.component.scss']
})
export class UploadHistorysComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UploadHistorysItem>;
  dataSource: UploadHistorysDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['sprint', 'start','end','filename','status'];

  ngOnInit() {
    this.dataSource = new UploadHistorysDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
