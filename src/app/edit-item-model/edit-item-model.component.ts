import { Component, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent {

  @Input()
  item!: BudgetItem;

  public onSubmitted(updatedItem: BudgetItem){
    
  }
}
