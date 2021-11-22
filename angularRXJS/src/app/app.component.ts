import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { of } from "rxjs";
import { delay, concatMap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angularRXJS concatMap';

  constructor(){}

  public ngOnInit(): void{
    let a = 2000
    let b = 1000
    let c = 3000 
    const source = of(a, b, c);

    const obsConcatMap = source.pipe(
      concatMap(v => of(`Valor: ${v}`).pipe(delay(v)))
      );

    obsConcatMap.subscribe((v)=> (console.log(v)));


  }



}




