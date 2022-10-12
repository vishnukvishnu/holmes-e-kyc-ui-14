import { Component, OnInit } from "@angular/core";
import { CommentsService } from "../services/comments.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"]
})
export class CommentsComponent implements OnInit {
  commentsData: any = [];
  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsService.CommentsData().subscribe(data => {
      this.commentsData = data;
      console.log(this.commentsData);
    });
  }
}
