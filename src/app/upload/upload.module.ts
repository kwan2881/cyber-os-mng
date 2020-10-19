import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadHeaderComponent } from './upload-header/upload-header.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadHistoryComponent } from './upload-history/upload-history.component';
import { UploadLayoutComponent } from './upload-layout/upload-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card'

import{ FlexLayoutModule} from '@angular/flex-layout';

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
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class UploadModule { }
