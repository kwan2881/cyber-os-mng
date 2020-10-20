import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadLayoutComponent } from './upload-layout/upload-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card'

import{ FlexLayoutModule} from '@angular/flex-layout';
import { UploadHistorysComponent } from './upload-historys/upload-historys.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [
  {
    path: "",
    component: UploadLayoutComponent
  }
];

@NgModule({
  declarations: [ UploadFileComponent, UploadLayoutComponent, UploadHistorysComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class UploadModule { }
