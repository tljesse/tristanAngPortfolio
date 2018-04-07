import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import { slideBottomLeft, fadeInOut } from '../../_animations/index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideBottomLeft, fadeInOut],
  host: { '[@slideBottomLeft]': '' }
})
export class ContactComponent {
	submitted: boolean = false;
	name: string = '';
	email: string = '';
	message: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, private af: AngularFireDatabase) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    const {name, email, message} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Message: ${message}</div>
    `;

    let formRequest = { name, email, message, date, html };
    this.af.list('/messages').push(formRequest);
    this.form.reset();
  	this.submitted = true;
  }

}
