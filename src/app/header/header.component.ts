import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../assets/product"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() productsInCart: Product[];
  @Output() showCart = new EventEmitter;

  ngOnInit(): void {
  }
}
