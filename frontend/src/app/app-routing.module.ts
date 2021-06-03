import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Importando os arquivos .ts para acionar quando determinada rota (path) for acionada:
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

// rotas da aplicação
const routes: Routes = [
	{
		path: "",
		component : HomeComponent
	},{
		path: "products",
		component : ProductCrudComponent
	},{
		path: "products/create",
		component : ProductCreateComponent
	},
];

@NgModule({
	declarations: [],
	imports: [
		// CommonModule
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
