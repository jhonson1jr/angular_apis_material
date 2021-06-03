import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // mensagens tipo alerta
@Injectable({
  providedIn: 'root' // Ficará disponivel para toda a aplicacao (Design pattern Singleton)
})
export class ProductService {
  
  constructor( private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
