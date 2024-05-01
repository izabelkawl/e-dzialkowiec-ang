import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-composition',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './composition.component.html',
  styleUrl: './composition.component.scss',
})
export class CompositionComponent {
  persons = new Array(3);
}
