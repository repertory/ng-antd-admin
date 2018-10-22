import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

import { UserService } from '~/shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  submiting = false;

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) {
      return false;
    }
    this.submiting = true;
    setTimeout(() => {
      this.user.current = {
        name: 'wangdong'
      };
      this.message.info('登录成功！');
      this.submiting = false;
      this.router.navigateByUrl('/');
    }, 1000);
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
