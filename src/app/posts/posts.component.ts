import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts : any[];
  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe((response) => {
        this.posts = <any>response;
      })
  }

}
