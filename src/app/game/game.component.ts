import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Firestore, collectionData, collection, addDoc, doc, docData, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],

})
export class GameComponent implements OnInit {
  games$: Observable<any>;
  game: Game = new Game(); 
  playerNumber : number = 0;
  gameId : string;

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) {
    const itemCollection = collection(firestore, 'games'); // muss den >Namen von firebase tragen
    this.games$ = collectionData(itemCollection);
  }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params : any) => {
      console.log(params['id']);
      this.gameId = params.id;
      const gameDocRef = doc(this.firestore, 'games', this.gameId); // Verwenden Sie die ID, um auf das Spiel-Dokument zuzugreifen
      docData(gameDocRef).subscribe((game : any) => {
        this.game.currentPlayer = game.currentPlayer;
        this.game.playCard = game.playCard;
        this.game.players = game.players;
        this.game.stack = game.stack;
        this.game.pickCardAnimation = game.pickCardAnimation;
        this.game.currentCard = game.currentCard;
      });
    })
  }

  newGame() {
    this.game = new Game(); 
  }

  updateGame() {
    const gameDocRef = doc(this.firestore, 'games', this.gameId); // Verwenden Sie die ID, um auf das Spiel-Dokument zuzugreifen
    updateDoc(gameDocRef, this.game.toJson());
  }
  
  takeCard(): void {
    if (!this.game.pickCardAnimation && this.game.players.length > 1) {
      this.game.currentCard = `${this.game.stack.pop()}`;
      this.game.pickCardAnimation = true;
      this.updateGame()
      setTimeout(() => {
        this.game.playCard.push(this.game.currentCard)
        this.game.pickCardAnimation = false;
        this.game.currentPlayer++
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length
        this.updateGame()
      }, 1000);
    } else {
      if (this.game.players.length < 1) 
       alert('Create First Players with "+ Button"!')
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe(name => {
      if(name) {
        this.playerNumber++;
        this.game.players.push(name + this.playerNumber)
        this.updateGame()
      }
    });
  }
  
}

