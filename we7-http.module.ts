import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UrlService, ENV } from "./src/url.service";
import { GetDirective } from "./src/get.directive";
import { PostDirective } from "./src/post.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [GetDirective, PostDirective],
  exports: [GetDirective, PostDirective]
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
