## 尝试对table进行简单封装，传入接口地址即可，简单暴力


- 使用方法，table参数为接口地址
```html
<div table="api/runner/list">
    <ng-template #head>
      <th>序号</th>
      <th>订单号</th>
      <th>任务要求</th>
    </ng-template>
    <ng-template #body let-item>
      <td>{{item.id}}</td>
      <td>{{item.origin_id}}</td>
      <td>
        <ul>
          <li *ngFor="let step of item.steps">
            {{step.tiem}} {{step.position}} {{step.note}}
          </li>
        </ul>
      </td>
    </ng-template>
  </div>
```
- 实现思路
```ts
import {
  Component,
  OnInit,
  ContentChild,
  TemplateRef,
  Input
} from "@angular/core";

@Component({
  selector: "[table]",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  @Input() table: string;
  @ContentChild("head") head: TemplateRef<any>;
  @ContentChild("body") body: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
}
```

```html
<table *get="let list of table" class="table">
  <thead class="thead-dark">
    <tr>
      <ng-container *ngTemplateOutlet="head"></ng-container>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of list">
      <ng-container *ngTemplateOutlet="body;context:{$implicit: item}"></ng-container>
    </tr>
  </tbody>
</table>
```

## 分析说明
> 代码很简单，知识点ngTemplateOutlet，思想控制翻转！
> 上一篇文章封装的*get和*post

## 几句代码封装了一个强劲的table，我的大NG！
