import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController, private location: Location) {
  }

  closeTheMenu() {
    this.menuController.close();
  }

  async share() {
    await Share.share({
      title: 'अध्यात्म',
      text: 'Check out this aswesome Hindu scripture:',
      url: this.location.path()
    });
  }
}
