import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAddPageComponent } from './quotes-add-page.component';

describe('QuotesAddPageComponent', () => {
  let component: QuotesAddPageComponent;
  let fixture: ComponentFixture<QuotesAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
