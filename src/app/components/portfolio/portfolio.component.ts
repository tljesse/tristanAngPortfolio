import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { slideTopRight } from '../../_animations/slideTopRight';
import { Project } from '../../_classes/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [slideTopRight],
  host: { '[@slideTopRight]': '' }
})
export class PortfolioComponent implements OnInit {
	projects: Array<Project>;

  constructor() {
  	// adding a project, need to change the $items variable in component scss
  	this.projects = [
  		{
  			title: 'Miss Sosie\'s',
  			tags: ['WordPress','Theme','Design','PayPal'],
  			desc: 'This one page site was built for Miss Sosie\'s small business out of California. They needed something modern and informative along with a payment gateway to order and deliver their product.',
  			image: 'http://placehold.it/1000x500'
  		},
  		{
  			title: 'Pingdar WordPress Plugin',
  			tags: ['WordPress','REST','PHP'],
  			desc: 'I built this plugin to pull in Pingdar website monitoring data into the WordPress admin dashboard. The plugin allows uses to register for Pingdar, monitor their data and a path to upgrade to premium Pingdar membership.',
  			image: 'http://placehold.it/1000x500'
  		},
  		{
  			title: 'Virgina Bar Exam Flashcards',
  			tags: ['WordPress','Python','Anki','UNIX'],
  			desc: 'Starting with the <a href="https://pypi.python.org/pypi/AnkiServer/2.0.5">AnkiServer</a> python library, I customized it to supplement study materials for the Virginia Bar Exam. I hosted the server on it\'s own Ubuntu instance and interacted with it from WordPress over HTTP requests.',
  			image: 'http://placehold.it/1000x500'
  		},
  		{
  			title: 'Christina Elloso Filmmaker',
  			tags: ['WordPress','Theme','Design'],
  			desc: 'This theme was built from scratch for the personal portfolio of Christina Elloso. It is designed to be lightweight and showcase all her fantastic work. I am in continual development of this theme.',
  			image: 'http://placehold.it/1000x500'	
  		}
  	];
  }

  ngOnInit() {
  }

}
