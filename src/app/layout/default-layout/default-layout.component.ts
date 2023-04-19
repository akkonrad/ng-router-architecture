import {Component, OnInit, Type} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WithContent} from "../types/content.type";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit, WithContent {
  title: string | undefined;
  content: WithContent['content'];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: WithContent) => {
      this.title = data.title;
      this.content = data.content;
    });
  }
}
