import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { interval, fromEvent, from, merge, empty } from "rxjs";
import { mapTo, scan, switchMap, takeWhile, startWith } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Buffer Time

export class AppComponent {
  title = 'angularRXJS switch Map ';


  constructor(){}
  /*
  public ngOnInit(): void {
    //One Line Nos permite Cambiar el estado de un mapTo 
    const evento = fromEvent(document, 'click').pipe(switchMap ((val) =>  interval(500))).subscribe((x) => console.log("Valor: ", x));

    //Two Line
    //const evento = fromEvent(document, 'click').pipe(switchMap ((val) =>  interval(1000)));
    //const resul = evento.subscribe((x) => console.log("Valor: ", x))
  }
  */

  @ViewChild('pauseBtn', {static: true}) pauseBtn: ElementRef | undefined;
  @ViewChild('resumeBtn', {static: true}) resumeBtn: ElementRef | undefined;
  @ViewChild('remainingP', {static: true}) remainingP: ElementRef | undefined;
  public ngOnInit(): void{
    const remainingLabel = document.getElementById('remaining');

    const obsInterval = interval(1000).pipe(mapTo(-1));
    const pause = fromEvent(this.pauseBtn?.nativeElement, 'click').pipe(mapTo(false));
    const resume = fromEvent(this.resumeBtn?.nativeElement, 'click').pipe(mapTo(true));

    const timer = merge(pause, resume)
      .pipe(
        startWith(true),
        switchMap(val => (val ? obsInterval : empty())),
        scan((acc: any, curr: any) => (curr ? curr + acc : acc), 15),
        takeWhile(v => v >=0 )       
      )
      //.subscribe((val: any) => (console.log(val)));
      .subscribe((val) => (remainingLabel!.innerHTML = val));

   
  }



}




