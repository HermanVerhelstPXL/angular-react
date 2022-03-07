import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NewsComponent, ChildComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    let el = createCustomElement(NewsComponent, {injector});
    customElements.define('news-widget', el);
    el = createCustomElement(ChildComponent, {injector});
    customElements.define('child-widget', el);
  }
  ngDoBootstrap() {}
}
