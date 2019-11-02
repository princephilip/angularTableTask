import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a title as 'Angular Task'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Task');
  });

  it(`should have a title of atleast 3 characters'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title.length).toBeGreaterThan(3);
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Task');
  });

  it('should test the table', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let tableRows = compiled.querySelector('tr');

     // Header row
     let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe('Id');
    expect(headerRow.cells[1].innerHTML).toBe('Name');
    expect(headerRow.cells[2].innerHTML).toBe('Description');
    expect(headerRow.cells[3].innerHTML).toBe('Date');

    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toBeGreaterThanOrEqual(0);
    expect(row1.cells[1].innerHTML).toString();
    expect(row1.cells[2].innerHTML).toString();

  });
});
