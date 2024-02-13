import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent {


  constructor(public dialogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
    ){ }

  public onSubmitted(updatedItem: BudgetItem){
    this.dialogRef.close(updatedItem);
  }
}
