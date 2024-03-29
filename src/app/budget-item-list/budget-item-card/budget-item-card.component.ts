import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent {
  @Input()
  item!: BudgetItem;

  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(){

  }
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(){

  }

  public onXButtonClick(){
    this.xButtonClick.emit();
  }

  public onCardClick(){
    this.cardClick.emit();
  }
}
