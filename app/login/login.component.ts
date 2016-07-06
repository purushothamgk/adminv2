import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';


import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LoginService } from '../login.service';
import {MyLogger} from '../mylogger.service';



@Component({
  selector: 'my-login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css']

})

export class LoginComponent implements OnInit {
  heroes: Hero[] = [];
  @Input() hero: Hero;
  constructor(
  private router: Router,
  private heroService: HeroService,
  private myLogger: MyLogger,
  private loginService: LoginService) {
}

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
    this.hero = new Hero();
    this.myLogger.log("Log message!");
  }

  login() {
    this.myLogger.log("login message!");
    this.loginService
        .login(this.hero)
        .then(hero => {
          this.hero = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

}

