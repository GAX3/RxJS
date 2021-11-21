import { Component, OnInit } from "@angular/core";
import { concat, interval, range } from "rxjs";
import { take } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// SHARE 

export class AppComponent {
  title = 'angularRXJS Concat';

  constructor (){}

  public ngOnInit(): void{    
    const timer = interval(1000).pipe(take(4));  //Multiplicara interval * take - 1000*4 realizando interaccion en 0,1,2,3 S.
    const rango = range(1, 10);                  //Range nos permite contar de 1 - 10
  
    const result = concat(timer, rango); //Concat permite ordenar las observables a ejecutar

    result.subscribe(x => console.log(x)); // subscripcion a las observable result

  }

}


