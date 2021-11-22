import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { interval, forkJoin, of } from "rxjs";
import { delay, take } from "rxjs/operators";
import { ajax } from 'rxjs/ajax'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angularRXJS forkJoin';

  constructor(){}

  public ngOnInit(): void{
    /*
    const fork = forkJoin(
      of('Hola'),
      of('Mundo').pipe(delay(500)),
      interval(1000).pipe(take(2))
    );

    fork.subscribe(val => console.log(val));
    */
   
    //Using Ajax
    const src = forkJoin(
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        ctmil: ajax.getJSON('https://api.github.com/users/ctmil'),
        gax3: ajax.getJSON('https://api.github.com/users/gax3')

      }
    );

    src.subscribe((x) =>  console.log(x));

  }



}




