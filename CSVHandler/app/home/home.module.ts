import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/Rx';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent]
})
export class HomeModule { }