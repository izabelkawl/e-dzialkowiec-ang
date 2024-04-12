import { Component, Input } from '@angular/core';
import { MatInputModule, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatInputModule, MatLabel],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() placeholder: string = '';

  @Input() label: string = '';

  @Input() type: string = 'text';

  @Input() value: string = '';
}
