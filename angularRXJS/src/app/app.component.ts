import { Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// fromEvent

export class AppComponent {
  title = 'angularRXJS From Event';

  constructor (){}
  
  @ViewChild('divGreen',{ static: true}) divGreen: ElementRef | undefined;

  public ngOnInit(): void{    
    const mouseMove = fromEvent(this.divGreen?.nativeElement, `mousemove`);
    
    mouseMove.subscribe((e: any | MouseEvent)=>{
      console.log(`Coords X: ${e.clientX}, Y:${e.clientY}`);
    })
  
  }


}


