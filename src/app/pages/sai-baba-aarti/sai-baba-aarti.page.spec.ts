import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaiBabaAartiPage } from './sai-baba-aarti.page';

describe('SaiBabaAartiPage', () => {
  let component: SaiBabaAartiPage;
  let fixture: ComponentFixture<SaiBabaAartiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiBabaAartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
