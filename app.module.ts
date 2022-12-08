import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabledataComponent } from './tabledata/tabledata.component';

@NgModule({
    declarations: [
        AppComponent,
        TabledataComponent,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ]
})
export class AppModule { }
