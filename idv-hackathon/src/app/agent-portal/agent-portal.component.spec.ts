import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPortalComponent } from './agent-portal.component';

describe('AgentPortalComponent', () => {
  let component: AgentPortalComponent;
  let fixture: ComponentFixture<AgentPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
