import { Component, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Elastic, TweenMax } from 'gsap';

import { slideTopRight } from '../../_animations/slideTopRight';
import { Project } from '../../_classes/project';
import { Particle } from '../../_classes/particle';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [slideTopRight],
  host: { '[@slideTopRight]': '' }
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChildren('myCanvas') canvasRef;
	public projects: Array<Project>;
  public png: any;
  public index = 0;
  public complete = [];
  context = [];

  constructor() {
  	// adding a project, need to change the $items letiable in component scss
  	this.projects = [
  		{
        title: 'ReframeDB',
        tags: ['Angular','Flask','Material'],
        desc: 'I joined this team of developers midway through the project to update and enhance a pharmaceutical data web portal. The app uses Angular 5 for front end and Flask Python on the back end.',
        links: [{'name':'Visit the Site','url':'https://reframedb.org'}],
        image: 'assets/img/repurpos-bg.png',
        particles: []
      },
      {
  			title: 'Miss Sosie\'s',
  			tags: ['WordPress','Theme','Design','PayPal'],
  			desc: 'This one page site was built for Miss Sosie\'s small business out of California. They needed something modern and informative along with a payment gateway to order and deliver their product.',
  			links: [{'name':'Visit the Site','url':'https://misssosies.com'}],
  			image: 'assets/img/sosies-bg.png',
        particles: []
  		},
  		{
  			title: 'Pingdar WordPress Plugin',
  			tags: ['WordPress','REST','PHP'],
  			desc: 'I built this plugin to pull in Pingdar website monitoring data into the WordPress admin dashboard. The plugin allows uses to register for Pingdar, monitor their data and a path to upgrade to premium Pingdar membership.',
  			links: [{'name':'Get the Plugin','url':'https://wordpress.org/plugins/pingdar-site-monitoring/'}],
  			image: 'assets/img/pingdar-bg.png',
        particles: []
  		},
  		{
  			title: 'Virgina Bar Exam Flashcards',
  			tags: ['WordPress','Python','Anki','UNIX'],
  			desc: 'Here I customized the AnkiServer Python library supplement study materials for the Virginia Bar Exam. I hosted the server on it\'s own Ubuntu instance and interacted with it from WordPress with a REST API.',
  			links: [{'name':'Visit the Site','url':'https://www.virginiabarexamtutor.com/'},{'name':'AnkiServer','url':'https://pypi.python.org/pypi/AnkiServer/2.0.5'}],
  			image: 'assets/img/lexbar-bg.png',
        particles: []
  		},
  		{
  			title: 'Christina Elloso Filmmaker',
  			tags: ['WordPress','Theme','Design'],
  			desc: 'This theme was built from scratch for the personal portfolio of Christina Elloso. It is designed to be lightweight and showcase all her fantastic work. I am in continual development of this theme.',
  			links: [{'name':'Visit the Site','url':'http://christinaelloso.com'}],
  			image: 'assets/img/christina-bg.png',
        particles: []
  		}
  	];

    

    this.png = new Image();
    this.png.src = this.projects[this.index].image;
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      for (let i = 0; i < this.projects.length; i++) {
        let canvas = this.canvasRef.toArray()[i].nativeElement;
        this.context[i] = canvas.getContext('2d');
      }
      this.drawImage();
    }, 700);
    
  }

  drawImage() {
    let canvas = this.canvasRef.toArray()[this.index].nativeElement;
    this.complete[this.index] = true;

    canvas.width = this.png.width * 2;
    canvas.height = this.png.height * 2;

    this.context[this.index].drawImage(this.png, 0, 0);

    let data = this.context[this.index].getImageData(0, 0, this.png.width, this.png.height);
    this.context[this.index].clearRect(0, 0, canvas.width, canvas.height);
    let tweend = false;
    
    for (let y = 0, y2 = data.height; y < y2; y+=2) {
      for (let x = 0, x2 = data.width; x < x2; x+=2) {
          let particle = {
            x0: x,
            y0: y,
            x1: this.png.width / 2,
            y1: this.png.height / 2,
            color: "rgb("+data.data[(y * 4 * data.width)+ (x * 4)]+","+data.data[(y * 4 * data.width)+ (x * 4) +1]+","+data.data[(y * 4 * data.width)+ (x * 4) +2]+")",
            speed: Math.random() + 2
          };

          if (y > y2 - 90 && !tweend){
            TweenMax.to(particle, particle.speed, {
              x1: particle.x0,
              y1: particle.y0,
              delay: y / 130,
              ease: Elastic.easeOut,
              onComplete: this.done,
              onCompleteParams: [this]
            });
            tweend = true;
          } else {
            TweenMax.to(particle, particle.speed, {
              x1: particle.x0,
              y1: particle.y0,
              delay: y / 130,
              ease: Elastic.easeOut
            });
          }
          
          this.projects[this.index].particles.push(particle);
        }
    }

    callback(this);

    function callback(me) {
      //let me.context[index] = me.context[index];
      me.context[me.index].clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0, j = me.projects[me.index].particles.length; i < j; i++) {
        let particle = me.projects[me.index].particles[i];
        me.context[me.index].fillStyle = particle.color;
        me.context[me.index].fillRect(particle.x1*2, particle.y1*2 , 2,2);
      }

      requestAnimationFrame(()=> {
        callback(me);
      });
    }
  }

  tick(canvas) {
    requestAnimationFrame(()=> {
      this.tick(canvas)
    });

    let ctx = this.context[this.index];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0, j = this.projects[this.index].particles.length; i < j; i++) {
      let particle = this.projects[this.index].particles[i];
      ctx.fillStyle = particle.color;
      ctx.fillRect(particle.x1*2, particle.y1*2 , 2,2);
    }
  }

  done(me: PortfolioComponent=null) {
    if (me.index < me.projects.length - 1) {
      me.index += 1;
      me.png.src = me.projects[me.index].image;
      setTimeout(() => {
        me.drawImage();
      }, 100);
    }

  }
  
  

}
