import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { AuthenticationService } from './shared/authentication.service';
import { LoginDialogComponent } from './shared/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  userData: Observable<User>;

  constructor(
    public authenticationService: AuthenticationService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.userData = this.authenticationService.userData;
    this.authenticationService.userData.subscribe(data => {
      if (!data)
        this.showModal();
    });
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  private showModal() {
    const modal = this.modalService.create({
      nzContent: LoginDialogComponent,
      nzTitle: 'User log in'
    });

    modal.afterClose.subscribe((result: { username: string, password: string }) => {
      if (result && result.username && result.password)
        this.authenticationService.SignIn(result.username, result.password);
    });
  }
}
