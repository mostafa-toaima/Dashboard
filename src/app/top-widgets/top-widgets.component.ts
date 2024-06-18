import { Component } from '@angular/core';
import { faLocation, faBoxes, faShop,  faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss',
})
export class TopWidgetsComponent {
  faLocation = faLocation;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faShop = faShop;
}
