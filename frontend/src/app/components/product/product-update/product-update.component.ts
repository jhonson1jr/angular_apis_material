import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product; // 1 produto

  constructor( 
    private productService: ProductService, 
    private router: Router, // para navegação
    private route: ActivatedRoute // pra pegar os parametros
  ) { }

  // na iniciação do componente, mapear os dados do backend e associar aos campos
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!; // pegando o ID (nome do parametro definido nas rotas)
    this.productService.readById(id).subscribe( product => {
      this.product = product; // atribui o produto localizado no produto instanciado (tela)
    });
  }

  // Processar atualisação de produto
  updateProduct(): void {
    this.productService.update(this.product).subscribe( () => {
      // após salvar, notifica na tela:
      this.productService.showMessage("Produto atualizado com sucesso");
      this.router.navigate(['/products']); // redirecionando a listagem
    });
  }
  
  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

}
 