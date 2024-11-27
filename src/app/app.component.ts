import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public pageId: string = '';
  @ViewChild('dynamicContent') dynamicContent!: ElementRef;

  constructor(private menuController: MenuController,
    private location: Location,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageId = this.router.url.slice(1) || 'landing-page';
        this.loadContent(this.pageId);
      }
    });
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

  loadContent(pageId: string) {
    this.http.get(`assets/pages/${pageId}.html`, { responseType: 'text' })
      .subscribe(html => {
        this.dynamicContent.nativeElement.innerHTML = html;
      });
  }
}
