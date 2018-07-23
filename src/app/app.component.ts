import { Component, OnInit} from '@angular/core';
import * as models from './core/models';
import { BehaviorSubject } from 'rxjs';
import { StateService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  places$: BehaviorSubject<models.Place[]> = new BehaviorSubject(null);
  actionName: string="Close";

  constructor(private stateService: StateService){}

  ngOnInit(){
    this.places$ = this.stateService.places$;
  }

  changeActionName(){
    if (this.actionName==="Open"){
      this.actionName = "Close"
    } else {
      this.actionName = "Open"
    }
  }
  
}
