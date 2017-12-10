import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.scss']
})
export class ChanelComponent implements OnInit {
  @Input() items:any;

  constructor() { }

  ngOnInit() {
  }

  getKeys(obj) {
    return Object.keys(obj);
  }

}
