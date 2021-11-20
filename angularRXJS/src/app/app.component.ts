import { Component } from '@angular/core';
import { interval, timer} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRXJS';
  

  ngOnInit(){
    //Interval nos permite repetir unas misma funcion cada cierto tiempo
    const contador = interval(2000);

    //Timer ejecuta la funcion en el tiempo definido 
    const contador2 = timer(2000);

    contador2.subscribe((n) =>{
      console.log(`Timer`);
    })


    contador.subscribe((n) =>{
      console.log(`Cada ${n} segundos`)
    })
  }

}
