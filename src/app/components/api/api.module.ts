import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
import { Postman, POSTMAN } from './postman';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [{ provide: POSTMAN, useClass: Postman }],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: ApiModule) {
    if (parentModule) {
      throw new Error(
        `CoreModule has already been loaded. Import Core modules in the AppModule only.`
      );
    }
  }
}
