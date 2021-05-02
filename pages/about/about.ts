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
  oldmet        : number;
  Activity   : string;
  
  
CalculateCaloriesBurned(exercise) {
 
this.Met = exercise;
this.BurnedCalories=(this.Met * 3.5 * (this.weight/200)) *this.duration;
this.BurnedCalories = parseFloat(this.BurnedCalories.toFixed(2));
this.WeightLoss = this.BurnedCalories / 7700;
this.WeightLoss = parseFloat(this.WeightLoss.toFixed(2));

this.oldduration=this.duration;
this.oldweight=this.weight;

}
}