import { AfterViewInit, Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { AuthenticationService } from './shared/authentication.service';
import { LoginDialogComponent } from './shared/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  isCollapsed = false;
  email: string;
  password: string;

  constructor(
    public authenticationService: AuthenticationService,
    private modalService: NzModalService
  ) { }

  ngAfterViewInit(): void {
    this.showModal();
  }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  private showModal() {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: LoginDialogComponent
    });
  }
}
