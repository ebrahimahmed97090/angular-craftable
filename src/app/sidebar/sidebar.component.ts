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
        'opened',
        style({
          width: '220px',
        })
      ),
      state('closed', style({ width: '55px' })),
      transition('opened<=>closed', animate(300)),
    ]),
    trigger('rotateState', [
      state(
        'opened',
        style({
          transform: 'rotate(180deg)',
          transition: 'all 300ms linear'
        })
      ),
      state(
        'closed',
        style({ transform: 'rotate(0deg)', transition: 'all 300ms linear' })
      ),


    ]),
    trigger('hideState', [
      state(
        'opened',
        style({
          display: '',
        })
      ),
      state('closed', style({ display: 'none', marginLeft: '10px'  })),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  state = 'closed';
  onAnimate(): void {
    this.state === 'opened' ? (this.state = 'closed') : (this.state = 'opened');
  }
  constructor() {}

  ngOnInit(): void {}
}
