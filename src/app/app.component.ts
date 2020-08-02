import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Product } from '../assets/product';
import { Category } from '../assets/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TEW-app';

  activeCategory:string = 'All';
  activeCategoryId:number = -1;
  products: Product[] = [];
  productsInCategory: Product[] = [];
  categories: Category[] = [];

  constructor(private dataService: DataService) {
  }

  changeCategory(text: string): void {
    this.activeCategory = text;
    this.activeCategoryId = -1;
    this.categories.forEach(element => {
      if(element.name === this.activeCategory){
        this.activeCategoryId = element.id;
      }
    });

    this.productsInCategory.splice(0);
    this.products.forEach(element => {
      if(this.activeCategoryId === -1){
        this.productsInCategory.push(element);
      }
      if(element.category_id === this.activeCategoryId){
        this.productsInCategory.push(element);
      }
    });
  }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data:Product) => this.products = data["records"]);
    setTimeout(()=>{
      this.products.forEach(element => {
        this.productsInCategory.push(element);
      },100);
    })

    this.dataService.sendGetRequestCategories().subscribe((data:Category) => this.categories = data["records"]);
  }


}
