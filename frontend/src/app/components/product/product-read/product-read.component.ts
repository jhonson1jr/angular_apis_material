import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {

  products: Product[]; // Array de Produtos
  displayedColumns = ['id', 'name', 'price', 'action']; // colunas a exibir na tela de listagem

  // injetando a Model dos produtos (onde estao as operacoes CRUD):
  constructor(private productService: ProductService) { }

  // Processando a listagem dos produtos no ao abrir a tela:
  ngOnInit(): void {
    // colocando o retorno em products:
    this.productService.read().subscribe( products => {
      this.products = products
      console.info(products)
    });
  }
}
