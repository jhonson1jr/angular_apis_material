import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name : '',
    price : 0
  }

  constructor( 
    private productService: ProductService,
    private router: Router
  ){ }

  ngOnInit(): void {
  }

  createProduct(): void {

    // Enviando o produto ao backend, dentro de subscribe executa quando a request terminar
    this.productService.create(this.product).subscribe( () => {
      this.productService.showMessage('Produto salvo com sucesso') // Informa que foi salvo
      this.router.navigate(['/products']) // redireciona para tela de listagem
    });

    
  }

  cancelProduct(): void { // redireciona para a tela de listagem de produtos
    this.router.navigate(['/products']);
  }
}
