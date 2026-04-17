import { Component, Input } from '@angular/core';

/**
 * Pure presentational component.
 * No business logic → reusable and testable.
 * Follows SOLID: Single Responsibility Principle.
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}