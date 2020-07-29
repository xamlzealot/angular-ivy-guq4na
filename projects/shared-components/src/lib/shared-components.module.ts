import { NgModule } from '@angular/core';
import { SharedComponentsComponent } from './shared-components.component';
import { DesignSystemModule } from 'design-system';



@NgModule({
  declarations: [SharedComponentsComponent],
  imports: [
    DesignSystemModule
  ],
  exports: [SharedComponentsComponent]
})
export class SharedComponentsModule { }
