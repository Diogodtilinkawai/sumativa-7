import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  nombre = new FormControl('');
  fecha = new FormControl('');
  items: any = [];

  agregar() {
    if (this.nombre.value && this.fecha.value) {
      this.items.push({ nombre: this.nombre.value, fecha: this.fecha.value });
      this.nombre.setValue('');
      this.fecha.setValue('');
    }
  }
  constructor() { }

}
