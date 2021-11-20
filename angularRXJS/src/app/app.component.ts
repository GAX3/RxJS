import { Component } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRXJS';
  obs: any;

  ngOnInit(){
    this.obs = new Observable(subscriber =>{
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(()=>{
        subscriber.next(4);
        subscriber.complete();
      },1000);
    });
  }

  rxjsFun(){
    console.log('just before subscribe');
    this.obs.subscribe({
      next: (x: string) =>  console.log('got value ' + x) ,
      error: (err: string) => console.error('something wrong occurred: ' + err),
      complete: () =>  console.log('done')
    });
      console.log('just after subscribe');
  }

  log(){
    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
    console.log("5")
  }

}
