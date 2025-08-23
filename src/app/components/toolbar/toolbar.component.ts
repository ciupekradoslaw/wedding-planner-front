import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarFacade } from './toolbar-facade.service';
import { GuestGroupService } from '../../shared/services/guest-group.service';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './toolbar.component.html',
  providers: [ToolbarFacade],
})
export class ToolbarComponent implements OnInit {
  readonly facade = inject(ToolbarFacade);
  readonly guestGroupsService = inject(GuestGroupService);

  onLogout() {
    this.facade.logout();
  }

  ngOnInit(): void {
    // this.guestGroupsService.getAll().subscribe((result) => console.log(result));
  }
}
