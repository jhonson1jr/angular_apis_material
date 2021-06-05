import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // mensagens tipo alerta
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root' // Ficará disponivel para toda a aplicacao (Design pattern Singleton)
})

// Controller

export class ProductService {
  
  baseURL = 'http://localhost:3001/products/';

  constructor( private snackBar: MatSnackBar, private http: HttpClient) { }

  // Modal para por mensagens na tela ao usuario:
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  // Salvar produto na API usando a Model Interface:
  // Envia (POST) um Produto e retorna um Observable do tipo Produto:
  create (product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  // Pegando os produtos da API:
  // Será retornado um array de produtos do backend:
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL);
  }

  // Pegando um produto pelo ID:
  readById(id: string): Observable<Product>{
    const url = `${this.baseURL}/${id}`; // concatenando a URL base com o ID do produto
    return this.http.get<Product>(url);
  }

  // Atualizando produto:
  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`; // concatenando a URL base com o ID do produto
    return this.http.put<Product>(url, product); // URL, Objeto a atualizar
  }
  
  // Deletando um produto pelo ID:
  deleteById(id: string): Observable<Product>{
    const url = `${this.baseURL}/${id}`; // concatenando a URL base com o ID do produto
    return this.http.delete<Product>(url);
  }
}
