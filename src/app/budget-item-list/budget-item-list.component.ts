import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent {
  @Input()
  budgetItems!: BudgetItem[];

  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>;
  @Output() update: EventEmitter<any> = new EventEmitter<any>;

  constructor(public dialog: MatDialog){

  }


  public onDelete(item: BudgetItem){
    this.delete.emit(item);
  }

  public onCardClicked(item: BudgetItem){
      const dialogRef = this.dialog.open(EditItemModelComponent, {
        width: '580px',
        data: item,
        });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.update.emit({
            old: item,
            new: result
          })
        }
      })
  }
}
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}