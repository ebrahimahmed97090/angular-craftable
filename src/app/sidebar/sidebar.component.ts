import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('divState', [
      state(
        'open',
        style({
          width: '16.5vw',
        })
      ),
      state('closed', style({ width: '3.0vw' })),
      transition('opened<=>closed', animate(200)),
    ]),
    trigger('rotateState', [
      state(
        'open',
        style({
          transform: 'rotate(-180deg)',
        })
      ),
      state('closed', style({ transform: 'rotate(180deg)' })),
      transition('opened<=>closed', animate(300)),
    ]),
    trigger('hideState', [
      state(
        'open',
        style({
          display: '',
        })
      ),
      state('closed', style({ display: 'none' })),
      transition('opened<=>closed', animate(200)),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  state = 'opened';
  onAnimate(): void {
    this.state === 'opened' ? (this.state = 'closed') : (this.state = 'opened');
  }
  constructor() {}

  ngOnInit(): void {}
}
