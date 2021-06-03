import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[myFor]'
})
export class ForDirective implements OnInit {
	// Pegando o que vem após a palavra "em" do elemento myFor
	@Input('myForEm') numbers: number[];

	constructor(
		private container: ViewContainerRef, // para usar o emelento setado como referencia
		private template: TemplateRef<any> // usa o elemento de refefencia como "template"
	){
		// console.info("myFor");
	}


	ngOnInit(): void {
		// console.info(this.numbers)
		for (let number of this.numbers) {
			// container referencia o elemento modelo; template o elemento atual, number o loop for:
			this.container.createEmbeddedView(this.template, { $implicit: number });
		}
	}
}
