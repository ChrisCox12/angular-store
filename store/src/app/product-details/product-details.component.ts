import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  // ActivatedRoute is being injected into the constructor as an argument;
  // ActivatedRoute contains info about the route and the route's params;
  // By injecting ActivatedRoutes, you are configuring the component to use a service
  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // First get product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromroute = Number(routeParams.get('productId'));

    // Find the product that corresponds w/ the id in the route
    this.product = products.find(product => product.id === productIdFromroute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);

    window.alert('Your product has been added to the cart!');
  }

}
