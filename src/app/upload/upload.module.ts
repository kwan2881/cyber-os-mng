import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadHeaderComponent } from './upload-header/upload-header.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadHistoryComponent } from './upload-history/upload-history.component';
import { UploadLayoutComponent } from './upload-layout/upload-layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: UploadLayoutComponent
  }
];

@NgModule({
  declarations: [UploadHeaderComponent, UploadFileComponent, UploadHistoryComponent, UploadLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UploadModule { }
