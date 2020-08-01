import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Category } from '../../assets/category';


@Component({
  selector: 'app-aside-left',
  templateUrl: `./aside-left.component.html`,
  styleUrls: ['./aside-left.component.css']
})
export class AsideLeftComponent implements OnInit {

  categories: Category[] = [];

  @Input() activeCategory;
  @Output() eventHandle = new EventEmitter();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequestCategories().subscribe((data:Category) => this.categories = data["records"]);
  }
}
