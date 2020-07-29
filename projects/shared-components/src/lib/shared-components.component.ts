import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-SharedComponents',
  template: `
    <p>
      shared-components works!
    </p>
    <lib-DesignSystem></lib-DesignSystem>
  `,
  styles: [
  ]
})
export class SharedComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
