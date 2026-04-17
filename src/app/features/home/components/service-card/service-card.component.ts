import { Component, Input } from '@angular/core';
import { ServiceLink } from '../../models/service.model';

/**
 * Reusable UI component representing one service card.
 * Open/Closed Principle: can be extended without modification.
 */
@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  @Input() service!: ServiceLink;
}