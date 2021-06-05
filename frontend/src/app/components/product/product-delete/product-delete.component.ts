import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product; // 1 produto

  constructor( 
    private productService: ProductService, 
    private router: Router, // para navegação
    private route: ActivatedRoute // pra pegar os parametros
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!; // pegando o ID (nome do parametro definido nas rotas)
    this.productService.readById(id).subscribe( product => {
      this.product = product; // atribui o produto localizado no produto instanciado (tela)
    });
  }

  // Processar atualisação de produto
  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')!; // pegando o ID (nome do parametro definido nas rotas)
    this.productService.deleteById(id).subscribe( () => {
      // após remover, notifica na tela:
      this.productService.showMessage("Produto removido com sucesso");
      this.router.navigate(['/products']); // redirecionando a listagem
    });
  }
  
  cancelProduct(): void {
    this.router.navigate(['/products']);
  }
}
