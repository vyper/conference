import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CodeOfConductComponent } from './features/code-of-conduct/code-of-conduct.component';
import { SpeakersComponent } from './features/speakers/speakers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
