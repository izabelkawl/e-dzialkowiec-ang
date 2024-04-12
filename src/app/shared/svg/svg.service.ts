import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  #httpClient = inject(HttpClient);

  getSvgCode(name: string): Promise<string> {
    const image$ = this.#httpClient.get(`./assets/img/${name}.svg`, {
      responseType: 'text',
    });
    return new Promise((resolve) => {
      image$.subscribe((svg: string) => {
        resolve(svg);
      });
    });
  }
}
