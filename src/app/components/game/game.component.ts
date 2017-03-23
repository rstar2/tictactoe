import { Component, Inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { IndexPair, TileState, Tile, Game, GameResult } from '../../model';
import { GameService } from '../../services/game.service';
import { AppState } from '../../store/state';
import { getGame, getMyTurn, getMyTileState, getResult } from '../../store/reducers';
import { GameActions } from '../../store/actions';


@Component({
  selector: 'app-game',
  template: `
    <div>
      {{ isMyTurn ? "It's my turn" : "Waiting opponent's turn"}}
    </div>
    <nav>
      <a href="javascript:void(0)" (click)="onNewGame()">New Game</a>
      <span>{{result[0]}} : {{result[1]}}</span>
    </nav>

    <!-- using a pipe -->
    <div class="game">
        <app-tile
            *ngFor="let tile of game | gameToTiles"
            [tile]="tile"
            (click)="onTileClick(tile, $event)"
        ></app-tile>
    </div>

    <!-- using a structural directive - not ready yet -->
    <!--
    <ng-container *appForEachTile="let tile of game.tiles">
        <app-tile
            [tile]="tile"
            (click)="onTileClick(tile, $event)"
         ></app-tile>
    </ng-container>
    -->
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  game: Game;
  myTileState: TileState;
  isMyTurn: boolean;

  destroy$: Subject<any>;

  result = [0, 0];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    // create a destroy
    this.destroy$ = new Subject();
    let store = this.store.takeUntil(this.destroy$) as Store<AppState>;

    store.select(getGame).subscribe((game: Game) => {
      this.game = game;
    });

    store.select(getMyTurn).subscribe((isMyTurn: boolean) => {
      this.isMyTurn = isMyTurn;
    });

    store.select(getMyTileState).subscribe((tileState: TileState) => {
      this.myTileState = tileState;
    });

    store.select(getResult).subscribe((result: GameResult) => {
      let toShow = true;
      switch (result) {
        case GameResult.NotEnded:
          toShow = false;
          break;
        case GameResult.Win:
          this.result[0] = this.result[0] + 1;
          break;
        case GameResult.Loss:
          this.result[1] = this.result[1] + 1;
          break;
      }
      if (toShow) {
        alert(GameResult[result]);
      }
    });

    this.onNewGame();
  }

  ngOnDestroy() {
    // unsubscribe from all store subscriptions
    this.destroy$.next('destroy');
  }

  onNewGame() {
    console.log('Start new game');
    this.store.dispatch(new GameActions.GameStartAction(this.isMyTurn));
  }

  onTileClick(tile: Tile) {
    if (tile.state !== TileState.Empty) {
      console.warn('Tile', tile, ' is already dirty');
      return;
    }

    if (!this.isMyTurn) {
      console.log('Waiting for my turn');
      return;
    }

    let tileNew = Object.assign({}, tile, { state: this.myTileState });
    this.store.dispatch(new GameActions.TileUpdateAction(tileNew));
  }

}
