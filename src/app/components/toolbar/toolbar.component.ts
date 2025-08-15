import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { ToolbarFacade } from './toolbar-facade.service';
import { GuestGroupService } from '../../shared/services/guest-group.service';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, MatToolbarModule, MatIcon, MatIconButton],
  templateUrl: './toolbar.component.html',
  providers: [ToolbarFacade],
})
export class ToolbarComponent implements OnInit {
  readonly facade = inject(ToolbarFacade);
  readonly guestGroupsService = inject(GuestGroupService);

  onLogout() {
    console.log('logout');
    this.facade.logout();
  }

  ngOnInit(): void {
    this.guestGroupsService.getAll().subscribe((result) => console.log(result));
  }
}
