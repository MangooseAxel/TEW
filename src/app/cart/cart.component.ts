import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemInCart } from '../../assets/itemInCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Input() productsInCart: ItemInCart[];
  @Input() cartVisibility: Boolean;
  @Output() showCart = new EventEmitter;

  ngOnInit(): void {
  }

}
