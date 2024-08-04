import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "portfolio", component: PortfolioComponent },
    { path: "contact", component: ContactComponent },
];
