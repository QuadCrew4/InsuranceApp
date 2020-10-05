  import { Injectable } from '@angular/core';
  import { FormGroup } from '@angular/forms';

  @Injectable({
    providedIn: 'root'
  })
  export class CustomValidationService {

    constructor() { }
    accountnoMatchValidator(accountno: string, confirmaccountno: string) {
      return (bankDetailsForm: FormGroup) => {
        const accountnoControl = bankDetailsForm.controls[accountno];
        const confirmaccountnoControl = bankDetailsForm.controls[confirmaccountno];

        if (!accountnoControl || !confirmaccountnoControl) {
          return null;
        }

        if (
          confirmaccountnoControl.errors &&
          !confirmaccountnoControl.errors.accountnoMismatch
        ) {
          return null;
        }

        if (accountnoControl.value !== confirmaccountnoControl.value) {
          confirmaccountnoControl
          .setErrors({ accountnoMismatch: true });
        } else {
          confirmaccountnoControl.setErrors(null);
        }
      };
    }

  }
