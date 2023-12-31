import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    description: '',
    category: { id: '', name: '' },
  };

  @Output() addedProduct = new EventEmitter<Product>();
  // It only sends the id string, then this id is used to request the product detail
  @Output() showDetail = new EventEmitter<string>();

  constructor() {}

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onshowDetail() {
    this.showDetail.emit(this.product.id);
  }
}
