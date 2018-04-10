import { Component, OnInit } from '@angular/core';

import { slideBottomRight } from '../../../_animations/index';

@Component({
  selector: 'app-reader-posts',
  templateUrl: './reader-posts.component.html',
  styleUrls: ['./reader-posts.component.scss'],
  animations: [slideBottomRight],
  host: { '[@slideBottomRight]': '' }
})
export class ReaderPostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
