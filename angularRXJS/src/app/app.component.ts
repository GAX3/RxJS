import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { bufferTime } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Ciclo de Observable 

export class AppComponent {
  title = 'angularRXJS Ciclo Observavle | Next, Error, Complete';

  constructor (){}

  public ngOnInit(): void{    
   const timer = interval(500);

    const buffer = timer.pipe(bufferTime(2000));

    const subs = buffer.subscribe((val) => { console.log('Buffer: ', val)} )
  }


  public ngOnDestroy(): void {}

}


