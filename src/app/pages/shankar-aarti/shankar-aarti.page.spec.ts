import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShankarAartiPage } from './shankar-aarti.page';

describe('ShankarAartiPage', () => {
  let component: ShankarAartiPage;
  let fixture: ComponentFixture<ShankarAartiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShankarAartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
