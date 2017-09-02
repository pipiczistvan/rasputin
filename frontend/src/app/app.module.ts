import { IconRegistryModule } from './icon-registry/icon-registry.module';
import { HttpModule } from '@angular/http';
import { FanControlService } from './fan-control/fan-control.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { FanControlComponent } from './fan-control/fan-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FanControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    IconRegistryModule
  ],
  providers: [FanControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
