import { AdminDialogComponent } from '@abstracts/admin-dialog-component';
import { Component, inject } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudDialogDataContract } from '@contracts/crud-dialog-data-contract';
import { OperationType } from '@enums/operation-type';
import { JobTitle } from '@models/job-title';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-title-popup',
  templateUrl: './job-title-popup.component.html',
  styleUrls: ['./job-title-popup.component.scss'],
})
export class JobTitlePopupComponent extends AdminDialogComponent<JobTitle> {
  form!: UntypedFormGroup;
  data: CrudDialogDataContract<JobTitle> = inject(MAT_DIALOG_DATA);

  _buildForm(): void {
    this.form = this.fb.group(this.model.buildForm(true));
  }

  protected _beforeSave(): boolean | Observable<boolean> {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  protected _prepareModel(): JobTitle | Observable<JobTitle> {
    return new JobTitle().clone<JobTitle>({
      ...this.model,
      ...this.form.value,
    });
  }

  protected _afterSave(model: JobTitle): void {
    this.model = model;
    this.operation = OperationType.UPDATE;
    this.toast.success(
      this.lang.map.msg_save_x_success.change({ x: this.model.getNames() })
    );
    this.dialogRef.close(this.model);
  }
}
