import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url.service";
/*
  *get="let item of url"
*/
@Directive({
  selector: "[get][getOf]"
})
export class GetDirective {
  @Input() getOf: string;
  @Input() getParams: string;

  constructor(
    public http: HttpClient,
    public view: ViewContainerRef,
    public template: TemplateRef<any>,
    public url: UrlService
  ) {}

  ngOnInit() {
    let url = this.url.getOpenUrl(this.getOf, this.getParams);
    this.http.get(url).subscribe((res: any) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: res.data,
        code: res.code,
        msg: res.msg,
        url: url
      });
    });
  }
}
