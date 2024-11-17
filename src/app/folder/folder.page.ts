import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  providers: [PageService],
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private pageService: PageService;

  public page: any;
  public iconPath: string = "";

  constructor(pageService: PageService) {
    this.pageService = pageService;
  }

  ngOnInit() {
    var pageId = this.activatedRoute.snapshot.paramMap.get('pageId') as string;
    if(pageId)      {
      this.page = this.pageService.getPage(pageId);
      this.iconPath = this.pageService.getIconpageId(pageId);
    }
  }
}
