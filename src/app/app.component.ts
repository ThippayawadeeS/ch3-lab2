import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  constructor (private backendService: BackendService) {}
  @ViewChild('productList',{static:true})
  productList: ProductListComponent;

ngOnInit(): void {
  this.productList.products = this.backendService.getProducts();
}
}
