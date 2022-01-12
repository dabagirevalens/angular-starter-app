import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  products = products

  share  () {
    window.alert('the product has been shared!')
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale.')
  }

  ngOnInit(): void {
  }

}
