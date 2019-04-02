import { Component } from '@angular/core';
import{Cinema} from './cinema.service';
import{SessionStorageService} from 'ngx-webstorage'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cinemas';
constructor(private session:SessionStorageService){

}

setSession(){
  this.session.store('user',"use");
}


}
