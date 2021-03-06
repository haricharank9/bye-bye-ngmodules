import { CounterComponent } from './../../counter/counter.component';
import { Component, OnInit, ɵrenderComponent, ɵɵdirectiveInject, INJECTOR, Injector } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor(private injector: Injector) { }

  ngOnInit() {

  }

  loadCounter() {
    import('../../counter/counter.component').then((c) => {
      ɵrenderComponent(c.CounterComponent, { host: 'my-host', injector: this.injector });
    });
  }


}
