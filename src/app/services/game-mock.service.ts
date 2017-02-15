import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GameService } from './game.service';

import { Tile, TileState } from '../model';


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

  updateTile(tile: Tile, tileState: TileState): Promise<any> {
    return null;
  }
}
