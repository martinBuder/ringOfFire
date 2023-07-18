import { Component } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, docData} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-site',
  templateUrl: './start-site.component.html',
  styleUrls: ['./start-site.component.scss']
})
export class StartSiteComponent {

  constructor(private firestore: Firestore,private router: Router) {}

  newGame(){
    let game = new Game();
    const itemCollection = collection(this.firestore, 'games'); // muss den >Namen von firebase tragen
    addDoc(itemCollection, game.toJson())
    .then((gameInfo: any) => {
      console.log(gameInfo);
      
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });   

  }
}
