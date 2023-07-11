import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartSiteComponent } from './start-site/start-site.component';

const routes: Routes = [
  { path: '', component: StartSiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
