import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, Validators} from '@angular/forms';

import { ClipboardModule} from 'ngx-clipboard';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ClrFormsNextModule,
    FormsModule,
    ClipboardModule
  ],
  exports: [
    ClarityModule,
    ClrFormsNextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
