import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechConComponent } from './tech-con.component';

describe('TechConComponent', () => {
  let component: TechConComponent;
  let fixture: ComponentFixture<TechConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
