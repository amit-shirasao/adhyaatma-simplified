import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VishnuAartiPage } from './vishnu-aarti.page';

describe('VishnuAartiPage', () => {
  let component: VishnuAartiPage;
  let fixture: ComponentFixture<VishnuAartiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VishnuAartiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
