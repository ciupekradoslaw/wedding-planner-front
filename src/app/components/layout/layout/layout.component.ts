import { Component } from '@angular/core';
import { ToolbarComponent } from '../../toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ToolbarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
