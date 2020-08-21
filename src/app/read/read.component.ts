import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model';

import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.tutorials$ = this.store.select('tutorial');
  }

  removeTutorial(index: number){
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

}
