import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideBottomLeft = 
	trigger('slideBottomLeft', [

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
				right: '400%',
				top: '400%',
				backgroundColor: '#319291'
			}),

			animate('1s ease-in-out', style({
				right: 0,
				top: 0
			}))
		]),

		transition(':leave', [
			animate('1s ease-in-out', style({
				right: '400%',
				top: '400%'
			}))
		])
	]);