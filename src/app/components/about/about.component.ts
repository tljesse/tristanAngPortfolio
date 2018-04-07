import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

// Potentially wrap this in a package down the line, until angular-fontawesome is released
import {faGithub, faLinkedinIn, faWordpressSimple, faAngular} from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';
fontawesome.library.add(faGithub, faLinkedinIn, faWordpressSimple, faAngular);

import { slideTopLeft, fadeInOut } from '../../_animations/index';
import { SocialLink } from '../../_classes/index';

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
  public socialLinks: SocialLink[];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.socialLinks = [
      {
        url: 'https://github.com/tljesse',
        icon: 'fa-github'
      },
      {
        url: 'https://linkedin.com/in/tristan-jesse',
        icon: 'fa-linkedin-in'
      }
    ]
  }

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
