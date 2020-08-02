import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../../assets/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() activeCategoryId;
  @Input() productsInCategory;
  @Input() productsInCart;
  @Output() toCart = new EventEmitter();
  selectedProduct: Product;

  ngOnInit() {
  }

  togglePopUp(product: Product) {
    document.getElementById('cardPopUp').classList.toggle('active');
    this.selectedProduct = product;
  }


}
