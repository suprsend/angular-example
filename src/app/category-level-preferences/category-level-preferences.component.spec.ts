import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLevelPreferencesComponent } from './category-level-preferences.component';

describe('CategoryLevelPreferencesComponent', () => {
  let component: CategoryLevelPreferencesComponent;
  let fixture: ComponentFixture<CategoryLevelPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryLevelPreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryLevelPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
