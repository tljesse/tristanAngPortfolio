import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideBottomRight = 
	trigger('slideBottomRight', [

		state('*', style({
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			zIndex: 20,
			backgroundColor: '#2e5d98'
		})),

		transition(':enter', [
			style({
				left: '400%',
				top: '400%',
				backgroundColor: '#2e5d98'
			}),

			animate('1s ease-in-out', style({
				left: 0,
				top: 0
			}))
		]),

		transition(':leave', [
			animate('1s ease-in-out', style({
				left: '400%',
				top: '400%'
			}))
		])
	]);