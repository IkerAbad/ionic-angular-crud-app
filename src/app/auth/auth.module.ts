import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Storage } from '@ionic/storage'
//import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    //IonicStorageModule,
    FormsModule,

  ]
})
export class AuthModule { }
