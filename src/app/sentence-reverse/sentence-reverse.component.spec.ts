import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceReverseComponent } from './sentence-reverse.component';

describe('SentenceReverseComponent', () => {
  let component: SentenceReverseComponent;
  let fixture: ComponentFixture<SentenceReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
