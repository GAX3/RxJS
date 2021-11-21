import { Component, OnInit } from "@angular/core";
import { concat, interval, Observable, range } from "rxjs";
import { take } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// SHARE 

export class AppComponent {
  title = 'angularRXJS Ciclo Observavle | Next, Error, Complete';

  constructor (){}

  public ngOnInit(): void{    
    const myObservable = new Observable((subscriber) =>{
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.error(`Error 1`);
      subscriber.complete();
    });

    const subs = myObservable.subscribe({
      next: x => console.log('El siguiente valor es ' + x),
      error: err => console.error(`Error: ${err}`),
      complete: () => console.log(`Susbcrption complete`)
    })

    subs.unsubscribe();
  }

  public ngOnDestroy(): void {}

}


