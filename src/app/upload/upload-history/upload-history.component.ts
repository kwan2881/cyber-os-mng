import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-upload-history',
  templateUrl: './upload-history.component.html',
  styleUrls: ['./upload-history.component.scss']
})
export class UploadHistoryComponent implements OnInit {

data=[
  {sprint:'20',startD:'14/9/63',endD:'25/9/63',filename:'time sheet.xls',status:'',icon:'delete'}]
  constructor() { }

  ngOnInit(): void {
  }

}
