import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.less']
})
export class LoginDialogComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  logIn(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      const result = {
        username: this.validateForm.get('username').value,
        password: this.validateForm.get('password').value
      };
      this.modal.close(result);
    }
  }

  fillLogin() {
    this.validateForm.get('username').setValue('janmeis2@gmail.com');
    this.validateForm.get('password').setValue('prdel123');
  }
}
