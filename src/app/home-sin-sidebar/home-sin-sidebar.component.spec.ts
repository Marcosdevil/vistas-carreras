import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSinSidebarComponent } from './home-sin-sidebar.component';

describe('HomeSinSidebarComponent', () => {
  let component: HomeSinSidebarComponent;
  let fixture: ComponentFixture<HomeSinSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSinSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSinSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
