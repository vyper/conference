import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocComponent } from './conferences/coc/coc.component';

const routes: Routes = [
  { path: '', redirectTo: '2020/start', pathMatch: 'full' },
  {
    path: '2020',
    loadChildren: () =>
      import(`./conferences/capybara2020/capybara2020.module`).then(
        m => m.Capybara2020Module,
      ),
  },
  {
    path: '2019',
    loadChildren: () =>
      import(`./conferences/capybara2019/capybara2019.module`).then(
        m => m.Capybara2019Module,
      ),
  },
  { path: '**', redirectTo: '2020/start' },
  { path: 'coc', component: CocComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
