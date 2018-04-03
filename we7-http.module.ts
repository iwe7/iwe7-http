import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UrlService, ENV } from "./src/url.service";
import { GetDirective } from "./src/get.directive";
import { PostDirective } from "./src/post.directive";
import { TableComponent } from './src/table/table.component';
import { UnderscoreModule } from 'iwe7-underscore';
@NgModule({
  imports: [CommonModule, UnderscoreModule],
  declarations: [GetDirective, PostDirective, TableComponent],
  exports: [GetDirective, PostDirective, TableComponent]
})
export class We7HttpModule {
  public static forRoot(env: any): ModuleWithProviders {
    return {
      ngModule: We7HttpModule,
      providers: [
        {
          provide: ENV,
          useValue: env
        },
        UrlService
      ]
    };
  }
}
