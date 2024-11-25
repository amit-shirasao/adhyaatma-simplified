import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adhyaay-selection',
  templateUrl: './adhyaay-selection.page.html',
  styleUrls: ['./adhyaay-selection.page.scss'],
})
export class AdhyaaySelectionPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
