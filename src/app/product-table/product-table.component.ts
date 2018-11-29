import { Component} from '@angular/core';
import {Sort} from '@angular/material';


export interface Products {
  check: boolean;
  category: string;
  name: string;
  prise: number;
}

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {

  public isEmpty = false;
  checked = false;

  products: Products[] = [
    {check: true, category: 'Сноуборд', name: 'Salomon', prise: 79},
    {check: true, category: 'Борд', name: 'Salomon', prise: 200},
    {check: true, category: 'Лыжи', name: 'Salomon', prise: 100},
    {check: true, category: 'Велосипед', name: 'Salo', prise: 79},
    {check: true, category: 'Сноуборд', name: 'Salomon', prise: 1500},
    {check: true, category: 'Сноуборд', name: 'Salomon', prise: 79},
    {check: true, category: 'Сноуборд', name: 'Salomon', prise: 79},
    {check: true, category: 'Сноуборд', name: 'Salomon', prise: 79},
    {check: true, category: 'Сноуборд', name: 'Salomon', prise: 79},
    {check: true, category: 'Сноуборд', name: 'Salomon', prise: 79}

  ];

  sortedData: Products[];

  constructor() {
    this.sortedData = this.products.slice();
  }

  sortData(sort: Sort) {
    const data = this.products.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'category': return compare(a.category, b.category, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'prise': return compare(a.prise, b.prise, isAsc);
        default: return 0;
      }
    });
  }

  addToCart() {
    console.log('added');
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



