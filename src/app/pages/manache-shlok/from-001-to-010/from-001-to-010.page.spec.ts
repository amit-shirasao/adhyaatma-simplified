import { ComponentFixture, TestBed } from '@angular/core/testing';
import { From001To010Page } from './from-001-to-010.page';

describe('From001To010Page', () => {
  let component: From001To010Page;
  let fixture: ComponentFixture<From001To010Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(From001To010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
