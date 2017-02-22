import { Pipe, PipeTransform } from '@angular/core';

import { Game, Matrix, Tile } from '../model';

@Pipe({
  name: 'gameToTiles'
})
export class GamePipe implements PipeTransform {

  transform(game: Game, args?: any): any {
    if (!game) {
      return null;
    }

    let flatArr: Array<Tile> = [];
    game.tiles.forEach(item => flatArr.push(item));
    return flatArr;
  }

}
