import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppFooterComponent } from './app.footer';

describe('AppFooterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppFooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppFooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hechoentiquicia'`, () => {
    const fixture = TestBed.createComponent(AppFooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hechoentiquicia');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppFooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hechoentiquicia!');
  });
});
