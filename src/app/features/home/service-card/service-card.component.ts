import { Component, Input } from '@angular/core';
import { ServiceLink } from '../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  @Input() service!: ServiceLink;
}