import { Component } from '@angular/core';
import { PageService } from './page.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: any;

  constructor(private pageService: PageService) {
    this.pages = pageService.getPages();
  }
}
