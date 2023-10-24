import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: string[] = [];
  player:"X"|"O"|undefined;
  winner:string | null | undefined;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  startGame(){
    this.newGame();
  }

  newGame():void {
    this.board=Array(9).fill(null);
    this.player="X";
    this.winner = null;
  }

  switchPlayer()
  {
    this.player=(this.player=='X')?'O':'X';
  }

  makeMove(i:number)
  {
    if(this.board[i]==null && this.player && this.winner==null)
    {
      this.board.splice(i,1,this.player);
      this.switchPlayer();
      this.winner=this.calculateWinner();
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a];
      }
    }
    return null;
  }


}
