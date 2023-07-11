import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-site',
  templateUrl: './start-site.component.html',
  styleUrls: ['./start-site.component.scss']
})
export class StartSiteComponent {

  constructor(private router: Router) {}

  newGame(){
    //Start Game
    this.router.navigateByUrl('game');
  }
}
