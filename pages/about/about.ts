import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['calculator.css']
})

export class AboutPage {
  weight        : number;
  duration      : number;
  Met           : number;
  oldweight     : number;
  oldduration   : number;
  BurnedCalories: number;
  WeightLoss    : number;
  activity      : string;
  oldmet        : number;
  oldactivity   : string;

CalculateCaloriesBurned(exercise) {

this.Met = exercise;
this.BurnedCalories=(this.Met * 3.5 * (this.weight/200)) *this.duration;
this.BurnedCalories = parseFloat(this.BurnedCalories.toFixed(2));
this.WeightLoss = this.BurnedCalories / 7700;
this.WeightLoss = parseFloat(this.WeightLoss.toFixed(2));

this.oldduration=this.duration;
this.oldweight=this.weight;
this.oldmet=this.Met;

if (this.oldmet=1.3) {
  this.oldactivity="Sitting at a Desk";
  }
else if (this.oldmet=2.2) {
  this.oldactivity="Washing Dishes";
  }
else if (this.oldmet=3.5){
  this.oldactivity="Light Weight Training";
 }
else if (this.oldmet=5.0)
      {this.oldactivity="Heavy Weight Training";
      }
else if (this.oldmet=10){
     this.oldactivity="Competitive Soccer";
     }
 else {
      this.oldactivity="Running";
      }
}
}