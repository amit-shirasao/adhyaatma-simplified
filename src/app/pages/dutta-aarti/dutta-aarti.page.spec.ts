import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuttaAartiPage } from './dutta-aarti.page';

describe('DuttaAartiPage', () => {
  let component: DuttaAartiPage;
  let fixture: ComponentFixture<DuttaAartiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DuttaAartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
