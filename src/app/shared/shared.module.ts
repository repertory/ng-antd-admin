import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
export { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
export * from './services/services.module';
export * from './modules/modules.module';

@NgModule({
  exports: [
    ComponentsModule,
    ServicesModule
  ],
  declarations: []
})
export class SharedModule { }
