import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  items: any;

  ngOnInit() {
    this.items = [
      {
        label: 'About Me',
      },
      {
        label: 'Projects',
        items: [
          {
            label: 'Physics',
          },
          {
            label: 'Machine Learning',
          },
          {
            label: 'Graphics',
          },
        ]
      },
    ]
  }
}

