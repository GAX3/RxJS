import { Component, OnInit } from "@angular/core";
import { concat, interval, Observable, range } from "rxjs";
import { take } from "rxjs/operators";


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
    const myObservable = new Observable((subscriber) =>{
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      //subscriber.error(`Error 1`); //Error Termina el ciclo de vida del observable 
      subscriber.next(4);  // sino hay ningun error el ciclo continua
      subscriber.complete(); //El ciclo puede acabar al completar todas las tareas
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


