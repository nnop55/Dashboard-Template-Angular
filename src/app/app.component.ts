import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet/>`
})
export class AppComponent {
  title = 'Dashboard-Template';

  public theme = inject(ThemeService)

}
