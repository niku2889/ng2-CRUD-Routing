import { provideRouter, RouterConfig } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    {
        path: 'about',
        component: AboutComponent
        //children: [
        //    { path: '', component: AboutHomeComponent },
        //    { path: 'item/:id', component: AboutItemComponent }
        //]
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];