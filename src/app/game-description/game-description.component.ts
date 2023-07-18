import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'The Thumbmaster has control over a special gesture for the rest of the round. Whenever the Thumbmaster performs the gesture, all other players must imitate it. The slowest player to replicate the gesture is required to drink.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'The Quizmaster has control over asking quiz questions for the remainder of the game. Whenever the Quizmaster poses a question, all other players must attempt to answer it. The player who gives the incorrect or slowest response is required to drink.' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  title: string = '';
  description : string = '';
  @Input() card: string = '';

  ngOnChanges() : void {
    if (this.card) {
      let cardNumber : number = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber -1]['title'];
      this.description = this.cardAction[cardNumber -1]['description']; 
    }    
  }

}
