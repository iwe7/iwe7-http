- 使用方法如下，超级方便吧！
```html
<div class="container">
  <div class="card" *get="let item of src;code as code;msg as msg;url as url;">
    <div class="card-header">
      GET请求接口:{{src}}
    </div>
    <div class="card-body">
      状态码：{{code}}
      <br> 备注说明： {{msg}}
      <br> 返回数据： {{item | json}}
      <br> 请求链接： {{url}}
    </div>
  </div>

  <div class="card" *post="let item of src;params params;body {id: 2}; code as code; msg as msg;url as url;">
    <div class="card-header">
      POST请求接口:{{src}}
    </div>
    <div class="card-body">
      状态码：{{code}}
      <br> 备注说明： {{msg}}
      <br> 返回数据： {{item | json}}
      <br> 请求链接： {{url}}
      <br> 请求数据： {{params|json}}
    </div>
  </div>
</div>
```

- get封装
```ts
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

```
- post封装
```ts
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

```

# 安装
```sh
yarn add iwe7-http
```

# 总结
> 感叹我大NG的强大！[iwe7-http](https://github.com/iwe7/iwe7-http)

# [angular5简单暴力封装table，实战干货]()
