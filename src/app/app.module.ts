import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { routings } from "app/app.routing";
import { QueueItemComponent } from './layout/queue-item/queue-item.component';
import { AdminControlsComponent } from './admin-controls/admin-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    QueueItemComponent,
    AdminControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routings
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
