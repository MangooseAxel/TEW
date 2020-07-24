import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private REST_API_SERVER = "../assets/product.json";
  private REST_API_SERVER = "http://localhost/apiTest/api/product/read_paging.php";
  private REST_API_SERVER_CATEGORIES = "http://localhost/apiTest/api/category/read.php";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetRequestCategories(){
    return this.httpClient.get(this.REST_API_SERVER_CATEGORIES);
  }
}
