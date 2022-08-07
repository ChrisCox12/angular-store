import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  // Input decorator indicate property value passed down from parent;
  // In this case, component has a property named product, of type Product, which is received from parent
  @Input() product!: Product;

  // Output decorator allows component to send data to the parent;
  // In this case, allows the component to emit an event to the parent
  // when the value of the property, notify, changes
  @Output() notify = new EventEmitter();

}
