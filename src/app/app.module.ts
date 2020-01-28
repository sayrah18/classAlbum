import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { Sayrah } from './app.sayrah.component';*/
import { AlbumComponent } from './album/album.component';
import { CommonModule } from '@angular/common';
import { TraineeComponent } from './trainee/trainee.component';

@NgModule({
  declarations: [
    AppComponent,
  
    AlbumComponent,
  
    TraineeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
