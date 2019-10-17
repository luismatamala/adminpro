import { Component, OnInit, Inject } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(@Inject(SidebarService) public _sidebar: SidebarService) { }

  ngOnInit() {

  }

}
