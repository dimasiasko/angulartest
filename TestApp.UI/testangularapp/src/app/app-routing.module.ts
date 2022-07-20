import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditPhotocardComponent } from './components/edit-photocard/edit-photocard.component';
import { PhotocardsListComponent } from './components/photocards-list/photocards-list.component';
import { StartpageComponent } from './components/startpage/startpage.component';

const routes: Routes = [
  {
    path: '',
    component: StartpageComponent
  },
  {
    path: 'photocards',
    component: PhotocardsListComponent
  },
  {
    path: 'photocards/edit/:id',
    component: EditPhotocardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
