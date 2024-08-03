import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-view',
  standalone: true,
  imports: [],
  template: `
   <div [innerHTML]="sanitizedSvg()"></div>
  `,
  styles: `
    div{    
      display: flex;
      align-items: center;
    }
  `
})
export class SvgViewComponent {

  @Input({ required: true }) svgPath!: string;
  sanitizedSvg = signal<SafeHtml>('')

  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    if (this.svgPath) {
      this.http.get(this.svgPath, { responseType: 'text' }).subscribe((data) => {
        const sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(data);
        this.sanitizedSvg.set(sanitizedContent)
      });
    }
  }
}
