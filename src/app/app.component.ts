import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Product } from '../assets/product';
import { ItemInCart } from '../assets/itemInCart';
import { Category } from '../assets/category';
import { element } from 'protractor';

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
  productsInCart: ItemInCart[] = [];
  categories: Category[] = [];
  cartVisibility: Boolean = false;

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

   showCart(): void {
    this.cartVisibility = !this.cartVisibility;
  }

  addToCart(product: Product): void {
    var itemInCart: ItemInCart = new ItemInCart();
    itemInCart.product = product;
    itemInCart.price = itemInCart.product.price * itemInCart.count;

    if(this.productsInCart.length >= 1){
      var index = this.productsInCart.findIndex(item=>item.product.id === product.id);
      if(index != -1){
        this.productsInCart[index].count++;
        this.productsInCart[index].price = this.productsInCart[index].count * product.price;
        localStorage.setItem(product.id.toString(), JSON.stringify(this.productsInCart[index]));
      }
      else {
        this.productsInCart.push(itemInCart);
        localStorage.setItem(product.id.toString(), JSON.stringify(itemInCart));
      }
    }
    else{
      this.productsInCart.push(itemInCart);
      localStorage.setItem(product.id.toString(), JSON.stringify(itemInCart));
    }
  }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data:Product) => this.products = data["records"]);
    setTimeout(()=>{
      this.products.forEach(element => {
        this.productsInCategory.push(element);
      });
      if(localStorage.length >=1){
        for(var i = 0; i < localStorage.length; i++){
          this.productsInCart.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        for(var i = 0; i < this.productsInCart.length; i++){
          console.log(`
          this.productsInCart[i].product.name ${this.productsInCart[i].product.name}\n
          `)
        }
      }
    }, 300)

    this.dataService.sendGetRequestCategories().subscribe((data:Category) => this.categories = data["records"]);


    // localStorage.clear();
  }


}
