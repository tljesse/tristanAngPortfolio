import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideTopLeft = 
	trigger('slideTopLeft', [

		state('*', style({
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			zIndex: 20,
			backgroundColor: '#35c988'
		})),

		transition(':enter', [
			style({
				right: '400%',
				bottom: '400%',
				backgroundColor: '#35c988'
			}),

			animate('1s ease-in-out', style({
				right: 0,
				bottom: 0
			}))
		]),

		transition(':leave', [
			animate('1s ease-in-out', style({
				right: '400%',
				bottom: '400%'
			}))
		])
	]);