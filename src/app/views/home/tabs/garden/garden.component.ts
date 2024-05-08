import { Component, OnInit } from '@angular/core';
import { SvgService } from '@shared/svg/svg.service';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrl: './garden.component.scss',
})
export class GardenComponent implements OnInit {
  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.svgService.getSvgCode('garden').then((svg) => {
      const colors = {
        free: '#7fbc5e',
        reservated: '#009999',
        busy: '#cc0033',
        onSale: '#cc0033',
      };
      // color changed menager
      const doc = new DOMParser().parseFromString(svg, 'application/xml');
      const div = document.getElementById('garden');
      console.log(doc);
      
      div?.appendChild(div.ownerDocument.importNode(doc.documentElement, true));
    });
  }
}
