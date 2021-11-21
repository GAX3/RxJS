import { Component, OnInit } from "@angular/core";
import {  fromEvent } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Tap -

export class AppComponent {
  title = 'angularRXJS Map and Filter';

  constructor (){}

  public ngOnInit(): void{    
   const clicks = fromEvent(document, 'click');

   const position = clicks.pipe(
    tap(ev => console.log(`Procesado ${ev}`),
      err => console.log(err),
      () => console.log('Completado')
    )
   );

   position.subscribe((pos) => console.log(pos));

  }


}


