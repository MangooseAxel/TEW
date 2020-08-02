import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../assets/product"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Input() productsInCart: Product[];
  @Input() cartVisibility: Boolean;
  @Output() showCart = new EventEmitter;

  ngOnInit(): void {
  }

}
