import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  basicMode$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}
}
