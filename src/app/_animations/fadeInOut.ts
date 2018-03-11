import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInOut = 
	trigger('fadeInOut', [
		state('true', style({ opacity: 1, display: 'flex' })),
		state('false', style({ opacity: 0, display: 'none' })),
		transition('true <=> false', animate('400ms'))
	]);