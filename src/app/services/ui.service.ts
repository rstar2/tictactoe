import { Injectable, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UIService implements OnInit {

  constructor(private af: AngularFire) {
  }

  ngOnInit(): void {
  }

  getTitle(): Observable<string> {
    return this.af.database.object('/title').map(snap => {
      // the snapshot in AngularFire2 has two properties snap.$key and snap.$value
      return snap.$value;
    }).share();
  }
}
