import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: 'about', component: AboutComponent },
			{ path: 'contact', component: ContactComponent },
			{ path: 'portfolio', component: PortfolioComponent }
		]
	},
	{
		path: 'blog',
		loadChildren: 'app/reader/reader.module#ReaderModule'
	},
	{
		path: 'editor',
		loadChildren: 'app/editor/editor.module#EditorModule'
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routedComponents = [HomeComponent, AboutComponent, ContactComponent, PortfolioComponent, PageNotFoundComponent];
