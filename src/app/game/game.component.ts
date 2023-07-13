import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game(); 

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game(); 
  }
  
  takeCard() {
    if (!this.pickCardAnimation && this.game.players.length > 1) {
      this.currentCard = `${this.game.stack.pop()}`;
      this.pickCardAnimation = true;
      setTimeout(() => {
        this.game.playCard.push(this.currentCard)
        this.pickCardAnimation = false;
        this.game.currentPlayer++
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length
      }, 1000);
    } else {
      alert('Create First Players with "+ Button"!')
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      this.game.players.push(name)
    });
  }
  
}
