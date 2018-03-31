import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menu = [
  	'About',
  	'Portfolio',
  	'Blog',
  	'Contact'
  ];
  splitMenu = {};
  particleStyle: object = {};
  particleParams: object = {};
  private title_text: string = 'Tristan Jesse';
  private title_display: string = '';
  private typing_text: object = [
  	'Tristan Jesse',
  	'Freelance Web Developer',
  	'Programming',
  	'Designing',
  	'Dreaming',
  	''
  ];
  private typing_display: object = [
  	'',
  	'',
  	'',
  	'',
  	'',
  	''
  ];

  constructor() {
  	this.menu.forEach((entry, index) => {
  		this.splitMenu[index] = entry.split('');
  	});
  	
  	this.particleStyle = {
  		'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  	};

  	this.particleParams = {
		  'particles': {
		    'number': {
		      'value': 160,
		      'density': {
		        'enable': true,
		        'value_area': 800
		      }
		    },
		    'color': {
		      'value': '#319291'
		    },
		    'shape': {
		      'type': 'circle',
		      'stroke': {
		        'width': 0,
		        'color': '#000000'
		      },
		      'polygon': {
		        'nb_sides': 5
		      },
		      'image': {
		        'src': 'img/github.svg',
		        'width': 100,
		        'height': 100
		      }
		    },
		    'opacity': {
		      'value': 1,
		      'random': true,
		      'anim': {
		        'enable': true,
		        'speed': 1,
		        'opacity_min': 0,
		        'sync': false
		      }
		    },
		    'size': {
		      'value': 3,
		      'random': true,
		      'anim': {
		        'enable': false,
		        'speed': 4,
		        'size_min': 0.3,
		        'sync': false
		      }
		    },
		    'line_linked': {
		      'enable': false,
		      'distance': 150,
		      'color': '#ffffff',
		      'opacity': 0.4,
		      'width': 1
		    },
		    'move': {
		      'enable': true,
		      'speed': 1,
		      'direction': 'none',
		      'random': true,
		      'straight': false,
		      'out_mode': 'out',
		      'bounce': false,
		      'attract': {
		        'enable': false,
		        'rotateX': 600,
		        'rotateY': 600
		      }
		    }
		  },
		  'interactivity': {
		    'detect_on': 'canvas',
		    'events': {
		      'onhover': {
		        'enable': true,
		        'mode': 'bubble'
		      },
		      'onclick': {
		        'enable': true,
		        'mode': 'repulse'
		      },
		      'resize': true
		    },
		    'modes': {
		      'grab': {
		        'distance': 400,
		        'line_linked': {
		          'opacity': 1
		        }
		      },
		      'bubble': {
		        'distance': 250,
		        'size': 0,
		        'duration': 2,
		        'opacity': 0,
		        'speed': 3
		      },
		      'repulse': {
		        'distance': 400,
		        'duration': 0.4
		      },
		      'push': {
		        'particles_nb': 4
		      },
		      'remove': {
		        'particles_nb': 2
		      }
		    }
		  },
		  'retina_detect': true
		}
  } // constructor

  ngOnInit() {
  	this.typingCallback(this, 0);
  }

  typingCallback(that, index) {
  	let total_length = that.typing_text[index].length;
  	let current_length = that.typing_display[index].length;
  	if (current_length < total_length) {
  		that.typing_display[index] += that.typing_text[index][current_length];
  		setTimeout(that.typingCallback, 50, that, index);
  	} else if (index < that.typing_text.length) {
  		index++;
  		setTimeout(that.typingCallback, 50, that, index);
  	}
  }

}
