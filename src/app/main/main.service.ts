import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private API_URL_LIST: string = "https://raw.githubusercontent.com/tsopenteam/content/master/ts/read.json";
  private API_URL_LIVE: string = "https://raw.githubusercontent.com/tsopenteam/content/master/ts/live.json";

  constructor(private http: HttpClient) { }

  public GetData() {
    return this.http.get(this.API_URL_LIST);
  }

  public GetDataLive() {
    return this.http.get(this.API_URL_LIVE);
  }
}