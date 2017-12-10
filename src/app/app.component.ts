import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items:any[];
  newUrl:string;
  feedUrls:string[];

  constructor(private apiService:ApiService) {
    this.items = [];
    this.feedUrls = [];
  }

  ngOnInit() {
  }

  getNewFeed() {
    this.feedUrls.push(this.newUrl);
    
    this.apiService.getFeed(this.newUrl)
    .subscribe((Response) => {
      parseString(Response, (err, result) => {
        this.setSimpleItems(result.rss.channel);
      });
    });
    
    this.newUrl = "";
  }

  remove(index) {
    this.feedUrls.splice(index, 1);
  }
  
  setSimpleItems(items) {
    this.items = items;
  }
} 
