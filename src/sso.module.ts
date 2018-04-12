// angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsoComponent } from './sso.component';
import { WindowRef } from './sso.window';
import { SsoService } from './sso.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SsoComponent
  ],
  exports: [
    SsoComponent
  ],
  providers: [WindowRef, SsoService]
})
export class SsoModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SsoModule,
      providers: [
      ]
    };
  }
}
