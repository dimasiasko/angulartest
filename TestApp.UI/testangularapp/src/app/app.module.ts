import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotocardsListComponent } from './components/photocards-list/photocards-list.component';
import { EditPhotocardComponent } from './components/edit-photocard/edit-photocard.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotocardsListComponent,
    EditPhotocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
