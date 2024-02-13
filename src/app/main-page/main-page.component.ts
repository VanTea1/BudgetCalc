import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  public addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
  }

  public deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }
}
