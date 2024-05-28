import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}
  user$ = this.userService.retornarUser();

  deslogar() {
   this.userService.logout();
   this.router.navigate(["/login"])

  }
}
