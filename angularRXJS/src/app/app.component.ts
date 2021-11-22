import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { of } from "rxjs";
import { delay, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angularRXJS concatMap';

  constructor(){}

  public ngOnInit(): void{
    /*
    let a = 2000
    let b = 1000
    let c = 3000 
    const source = of(a, b, c);

    //Merge Map nos ejecuta la observable con menor delay 
    const obsMergeMap = source.pipe(
      mergeMap(v => of(`Valor: ${v}`).pipe(delay(v)))
      );

    obsMergeMap.subscribe((v)=> (console.log(v)));
    */
   
    //Real Life Example
    const source = of(
      ajax.getJSON('https://api.github.com/users/gax3'),
      ajax.getJSON('https://api.github.com/users/ctmil')
    )   

    const obsMergeMap = source.pipe(
      mergeMap(v => v)
    );

    obsMergeMap.subscribe(v => console.log(v));


  }



}




