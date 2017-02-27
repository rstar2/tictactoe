import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GameService } from './game.service';
import { GameResult, Tile, TileState } from '../model';

@Injectable()
export class GameMockService implements GameService {

  getTitle(): Observable<string> {
    return new Observable<string>(observer => {
      // console.log('next');
      observer.next('Mocking title');
      observer.complete();
      return () => {
        // console.log('disposed');
      };
    });
  }

  public updateTile(tile: Tile, tileState: TileState): Promise<any> {
    throw 'Not Implemented';
  }

  public finishGame(result: GameResult): Promise<any> {
    throw 'Not Implemented';
  }

  public startGame(oponentUid: string, isMyTurn: boolean): Promise<any> {
    throw 'Not Implemented';
  }
}
