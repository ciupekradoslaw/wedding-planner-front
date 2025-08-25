import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [MatTabsModule, TranslatePipe],
})
export class AdminComponent {}
