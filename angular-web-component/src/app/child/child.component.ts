import {Component, OnInit} from '@angular/core';
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  data: any;

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.data = this.newsService.getData()
  }

}
