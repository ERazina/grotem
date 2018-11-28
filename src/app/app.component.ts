import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {Config} from 'protractor';
import {ConfigService} from './config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public url = 'https://ssdev.superagent.ru/TestApp/swagger/#!/Values/ValuesGetParentsGet';

  // https://ssdev.superagent.ru/TestApp/Values/GetWithParent

  constructor() { }

  getGoods() {
    this.ConfigService.getConfig()
    subscribe((data: Config) => this.config = {
      url: data[url];
    })
  }

  getAll() {

  }

  sortItems() {

  }

  addToCart() {

  }
}
