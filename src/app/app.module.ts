import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KngCreatorComponent } from './kng-creator/kng-creator.component';
import { TreeSelecterComponent } from './tree-selecter/tree-selecter.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    KngCreatorComponent,
    TreeSelecterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
