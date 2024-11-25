import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shlok-selection',
  templateUrl: './shlok-selection.page.html',
  styleUrls: ['./shlok-selection.page.scss'],
})
export class ShlokSelectionPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
