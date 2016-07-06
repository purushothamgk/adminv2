import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService }     from './hero.service';
import { LoginService }     from './login.service';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {LOGGING_PROVIDERS} from './mylogger.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    LOGGING_PROVIDERS,
    LoginService
  ]

})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
 },
 {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
 },
 {
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
 }


])

export class AppComponent {
  title = 'Tour of Heroes';
}
