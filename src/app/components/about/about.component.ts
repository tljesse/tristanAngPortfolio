import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { slideTopLeft, fadeInOut } from '../../_animations/index';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideTopLeft, fadeInOut],
  host: { '[@slideTopLeft]': '' }
})
export class AboutComponent implements AfterViewInit {
	typing_text: string = 'I\'ve been programming from the ripe old age of 2 so it\'s safe to say I\'m and expert';
	typing_display: string = '';
  entered: boolean = false;
  finished: boolean = false;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router) { }

  ngAfterViewInit() {
    Observable.interval(950)
      .takeWhile((val, index) => index < 3)
      .subscribe(i => {
        if (i < 2)
          this.entered = !this.entered;
        else
          this.finished = true;
      });
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
