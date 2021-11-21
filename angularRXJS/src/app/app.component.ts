import { Component, OnInit } from "@angular/core";
import { pipe, of, from, fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Map And Filter

export class AppComponent {
  title = 'angularRXJS Map and Filter';

  constructor (){}

  public ngOnInit(): void{    
    const nums = of(1,2,3,4,5,6,7,8,9,10);
  
    const alCuadrado = pipe(
      filter((n: number | any ) => n % 2 === 0),
      map(n => n *n)
    );

    const cuadrado = alCuadrado(nums);

    cuadrado.subscribe((x)=>{
      console.log(`Cuadrado: ${x}`)
    })


  
  
  

  }


}


