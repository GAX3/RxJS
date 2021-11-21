import { Component, OnInit } from "@angular/core";
import {  fromEvent, timer } from "rxjs";
import { tap, mapTo, share, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Tap -

export class AppComponent {
  title = 'angularRXJS Share';

  constructor (){}

  public ngOnInit(): void{    
   const time =  timer(2000);

   const obs = time.pipe(
     tap(() => console.log("TAP ON")),
     mapTo('END OBS')
   );

   const subs01 = obs.subscribe(val => console.log(val));
   const subs02 = obs.subscribe(val => console.log(val));

   const sharedObs = obs.pipe(share());

   console.log("SHARE ON");
   const subs03 = sharedObs.subscribe(val => console.log(val));
   const subs04 = sharedObs.subscribe(val => console.log(val));
  }



}


