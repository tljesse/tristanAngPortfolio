import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { slideBottomLeft, fadeInOut } from '../../_animations/index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideBottomLeft, fadeInOut],
  host: { '[@slideBottomLeft]': '' }
})
export class ContactComponent implements OnInit {
	submitted: boolean = false;
	name: string = '';
	email: string = '';
	message: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	this.submitted = true;
  }

}
