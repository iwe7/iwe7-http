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
