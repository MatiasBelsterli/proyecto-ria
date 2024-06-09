import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../../models/products/product.model';
import { CartService } from '../../services/cart/cart.service';
import { toast } from 'bulma-toast';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input({ required: true }) product!: Product;
  constructor(private cartService: CartService) { }
  quantity: number = 0;
  urlImage: string = 'https://bulma.io/assets/images/placeholders/1280x960.png'
  ngOnInit() {
    if (this.product.image !== null) this.urlImage = `data:image/png;base64,${this.product.image}`;
  }

  addToCart() {
    if (this.quantity < 1) {
      toast({
        message: 'Please select a valid quantity!',
        type: 'is-danger',
        position: 'top-center',
        duration: 2000,
      })
      this.quantity = 0
      return
    }
    this.cartService.add(this.product, this.quantity).subscribe();
    this.quantity = 0
    toast({
      message: 'Product added to cart!      ',
      type: 'is-success',
      position: 'top-center',
      duration: 3000,
      dismissible: true,
    })
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) this.quantity--;
  }
}
