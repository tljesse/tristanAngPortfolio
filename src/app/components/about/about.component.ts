import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { slideTopLeft } from '../../_animations/slideTopLeft';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideTopLeft],
  host: { '[@slideTopLeft]': '' }
})
export class AboutComponent implements OnInit {
	typing_text: string = 'I\'ve been programming from the ripe old age of 2 so it\'s safe to say I\'m and expert';
	typing_display: string = '';

  constructor(
  	private route: ActivatedRoute,
  	private router: Router) { }

  ngOnInit() {
  	//setTimeout(this.typingCallback, 1000, this);
  }

  typingCallback(that) {
  	let total_length = that.typing_text.length;
  	let current_length = that.typing_display.length;
  	if (current_length < total_length) {
  		that.typing_display += that.typing_text[current_length];
  		setTimeout(that.typingCallback, 10, that);
  	}
  }
}
