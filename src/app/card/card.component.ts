import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../../assets/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: Product[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data:Product) => this.products = data["records"]);
  }


}
