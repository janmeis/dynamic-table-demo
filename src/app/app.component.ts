import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { AuthenticationService } from './shared/authentication.service';
import { LoginDialogComponent } from './shared/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  isCollapsed = false;
  userData: Observable<firebase.User>;

  constructor(
    public authenticationService: AuthenticationService,
    private modalService: NzModalService
  ) { }
  ngOnInit(): void {
    this.userData = this.authenticationService.userData;
  }

  ngAfterViewInit(): void {
    this.showModal();
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
