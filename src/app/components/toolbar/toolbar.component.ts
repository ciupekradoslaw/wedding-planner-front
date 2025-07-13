import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, MatToolbarModule, MatIcon, MatIconButton],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {}
