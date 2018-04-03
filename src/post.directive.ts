import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url.service";
/*
  *post="let item of url;params params;"
*/
@Directive({
  selector: "[post][postOf]"
})
export class PostDirective {
  @Input() postOf: string;
  @Input() postParams: any;
  @Input() postBody: any;
  constructor(
    public http: HttpClient,
    public view: ViewContainerRef,
    public template: TemplateRef<any>,
    public url: UrlService
  ) {}

  ngOnInit() {
    let url = this.url.getOpenUrl(this.postOf, this.postParams);
    this.http.post(url, this.postBody).subscribe((res: any) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: res.data,
        code: res.code,
        msg: res.msg,
        url: url
      });
    });
  }
}
