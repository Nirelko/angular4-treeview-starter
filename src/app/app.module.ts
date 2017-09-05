import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdButtonToggleModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';
import 'hammerjs';

import { AppComponent } from './app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
