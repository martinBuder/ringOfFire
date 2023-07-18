import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartSiteComponent } from './start-site/start-site.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', component: StartSiteComponent},
  { path: 'game/:id', component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
