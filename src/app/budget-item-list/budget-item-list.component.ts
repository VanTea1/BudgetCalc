import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent {
  @Input()
  budgetItems!: BudgetItem[];

  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>;

  public onDelete(item: BudgetItem){
    this.delete.emit(item);
  }
}
