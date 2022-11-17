import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesListPageComponent } from './quotes-list-page.component';

describe('QuotesListPageComponent', () => {
  let component: QuotesListPageComponent;
  let fixture: ComponentFixture<QuotesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
