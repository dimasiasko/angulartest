import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhotocardsListComponent } from './components/photocards-list/photocards-list.component';

const routes: Routes = [
{
  path: 'photocards',
  component: PhotocardsListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
