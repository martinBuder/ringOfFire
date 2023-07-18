export class Game {
	public players: string[] = [];
	public stack: string[] = [];
	public playCard: string[] = [];
	public currentPlayer: number = 0;
	public pickCardAnimation: boolean = false;
	public currentCard: string = '';

	constructor() {
		for (let i = 1; i < 14; i++) {
			this.stack.push(`ace_${i}`); 
			this.stack.push(`clubs_${i}`); 
			this.stack.push(`diamonds_${i}`); 
			this.stack.push(`hearts_${i}`); 
			this.stack.sort(() => Math.random() - 0.5); //zufällige Sortierung
		}
	}

	public toJson() {
		return {
			players: this.players,
			stack: this.stack,
			playCard: this.playCard,
			currentPlayer: this.currentPlayer,
			pickCardAnimation: this.pickCardAnimation,
			currentCard: this.currentCard,
		}
	}

}