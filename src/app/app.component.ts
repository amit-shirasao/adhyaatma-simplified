import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController, private router: Router) {
  }

  closeTheMenu() {
    this.menuController.close();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
