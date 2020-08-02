import { Component, OnInit, Input, Output } from '@angular/core';
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

  ngOnInit() {
  }



}
