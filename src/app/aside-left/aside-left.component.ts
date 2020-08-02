import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../assets/category';


@Component({
  selector: 'app-aside-left',
  templateUrl: `./aside-left.component.html`,
  styleUrls: ['./aside-left.component.css']
})
export class AsideLeftComponent implements OnInit {
  @Input() categories;
  @Input() activeCategory;
  @Output() eventHandle = new EventEmitter();
  ngOnInit() {
  }
}
