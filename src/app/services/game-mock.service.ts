import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GameService } from './game.service';
import { GameResult, Tile, TileState } from '../model';

@Injectable()
export class GameMockService extends GameService {

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

}
