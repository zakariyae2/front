import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToList2Component } from './to-list2.component';

describe('ToList2Component', () => {
  let component: ToList2Component;
  let fixture: ComponentFixture<ToList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToList2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
