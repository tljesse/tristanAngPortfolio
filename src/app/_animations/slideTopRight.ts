import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideTopRight = 
	trigger('slideTopRight', [

		state('*', style({
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			zIndex: 20,
			backgroundColor: '#319291'
		})),

		transition(':enter', [
			style({
				left: '400%',
				bottom: '400%',
				backgroundColor: '#319291'
			}),

			animate('1s ease-in-out', style({
				left: 0,
				bottom: 0
			}))
		]),

		transition(':leave', [
			animate('1s ease-in-out', style({
				left: '400%',
				bottom: '400%'
			}))
		])
	]);