import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestauranteWebAngular';

constructor(private Http:HttpClient){

}


ngOnInit(){

  this.Http.get("https://jsonplaceholder.typicode.com/todos/").subscribe(x=> console.log(x));

}

}
