import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro',
  template: `
    <div>
      <label>
        <input type="checkbox" (change)="onDiscountChange($event)" /> Mostrar solo con descuento
      </label>
    </div>
  `,
})
export class FiltroComponent {
  @Output() toggleDiscount: EventEmitter<boolean> = new EventEmitter<boolean>();

  onDiscountChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.toggleDiscount.emit(checkbox.checked); 
  }
}
