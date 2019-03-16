import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpOneComponent } from './cmp-one/cmp-one.component';
import { CmpTwoComponent } from './cmp-two/cmp-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpOneComponent,
    CmpTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
