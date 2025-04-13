import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinhHa2025Component } from './trinh-ha-2025.component';

describe('TrinhHa2025Component', () => {
  let component: TrinhHa2025Component;
  let fixture: ComponentFixture<TrinhHa2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrinhHa2025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrinhHa2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
