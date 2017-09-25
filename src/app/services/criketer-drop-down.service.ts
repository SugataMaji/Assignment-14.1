import { Injectable } from '@angular/core';
import { IPlayerType } from 'app/interface/player-type';
import {Http} from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class CriketerDropDownService {

    constructor( private http : Http) { }

  playerType: IPlayerType[] = [];

  /** Get the player Type */
 /* getPlayerType() {
    return this.playerType = [{
      id: 1,
      type: 'Batsman'
    },
    {
      id: 1,
      type: 'Bowler'
    }, {
      id: 1,
      type: 'Wicket Keeper'
    }
    ];
  }*/

   getPlayerType(){
    return this.http.get('/assets/player.json')
               .map(res => res.json());
  }

}
