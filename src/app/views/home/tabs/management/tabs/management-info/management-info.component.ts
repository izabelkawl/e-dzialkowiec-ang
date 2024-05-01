import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-management-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './management-info.component.html',
  styleUrl: './management-info.component.scss',
})
export class ManagementInfoComponent {
  info = new Array(3);
}
