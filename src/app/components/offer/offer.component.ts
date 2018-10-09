import {Component, Input, OnInit} from '@angular/core';
import {OfferDTO} from '../../model/offer/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  @Input()
  offer: OfferDTO;

  constructor() {
  }

  ngOnInit() {
  }

}
