import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() cardSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.cardSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  showHeroe() {
    // this.router.navigate(['/heroe', this.index]);
    this.cardSelected.emit(this.index);
  }

}
