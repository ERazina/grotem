import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  url = 'https://ssdev.superagent.ru/TestApp/Values/GetWithParent';

  getConfig() {
    return this.http.get<Config>(this.url);
  }
}
