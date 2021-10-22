import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayDataComponent } from './display-data/display-data.component';
import { AgGridModule } from 'ag-grid-angular';
import { PnlDataDisplayComponent } from './pnl-data-display/pnl-data-display.component';
import {NegToPosPipe} from './negtopos.pipe';

@NgModule({
  declarations: [
    DisplayDataComponent,
    AppComponent,
    PnlDataDisplayComponent,
    NegToPosPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[NegToPosPipe]
})
export class AppModule { }

