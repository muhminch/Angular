import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  id: any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("On Init"); 
    this.route.paramMap
    .subscribe((params) => {
       this.id = params.get('id');
    })
  }

}
