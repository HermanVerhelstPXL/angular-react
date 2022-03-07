import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getData() {
    return ["a", "b", "c", "d", "e"]
  }
}
