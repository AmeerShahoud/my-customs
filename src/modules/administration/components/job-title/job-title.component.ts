import { AdminComponent } from '@abstracts/admin-component';
import { Component, inject } from '@angular/core';
import { JobTitle } from '@models/job-title';
import { JobTitlePopupComponent } from '@modules/administration/popups/job-title-popup/job-title-popup.component';
import { JobTitleService } from '@services/job-title.service';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.scss'],
})
export class JobTitleComponent extends AdminComponent<
  JobTitlePopupComponent,
  JobTitle,
  JobTitleService
> {
  service = inject(JobTitleService);
  displayedColumns: string[] = [
    'select',
    'jobType',
    'isSystem',
    'arName',
    'enName',
    'actions',
  ];
}
