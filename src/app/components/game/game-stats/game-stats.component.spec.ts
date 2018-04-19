import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatsComponent } from './game-stats.component';

describe('GameStatsComponent', () => {
  let component: GameStatsComponent;
  let fixture: ComponentFixture<GameStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
