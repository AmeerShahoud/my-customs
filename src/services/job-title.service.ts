import { BaseCrudWithDialogService } from '@abstracts/base-crud-with-dialog-service';
import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Constructor } from '@app-types/constructors';
import { JobTitle } from '@models/job-title';
import { Pagination } from '@models/pagination';
import { JobTitlePopupComponent } from '@modules/administration/popups/job-title-popup/job-title-popup.component';
import { CastResponseContainer } from 'cast-response';

@CastResponseContainer({
  $pagination: {
    model: () => Pagination,
    shape: {
      'rs.*': () => JobTitle,
    },
  },
  $default: {
    model: () => JobTitle,
  },
})
@Injectable({
  providedIn: 'root',
})
export class JobTitleService extends BaseCrudWithDialogService<
  JobTitlePopupComponent,
  JobTitle
> {
  protected getModelClass(): Constructor<JobTitle> {
    return JobTitle;
  }
  protected getModelInstance(): JobTitle {
    return new JobTitle();
  }
  getDialogComponent(): ComponentType<JobTitlePopupComponent> {
    return JobTitlePopupComponent;
  }
  getUrlSegment(): string {
    return this.urlService.URLS.JOB_TITLE;
  }
}
