import { BaseModel } from '@abstracts/base-model';
import { LocalizationInterceptor } from '@model-interceptors/localization-interceptor';
import { JobTitleService } from '@services/job-title.service';
import { InterceptModel } from 'cast-response';
import { AdminResult } from './admin-result';
import { CustomValidators } from '@validators/custom-validators';

const { send, receive } = new LocalizationInterceptor();

@InterceptModel({
  send,
  receive,
})
export class JobTitle extends BaseModel<JobTitle, JobTitleService> {
  $$__service_name__$$ = 'JobTitleService';
  status!: number;
  statusDateModified!: string;
  jobType!: number;
  isSystem!: boolean;
  statusInfo!: AdminResult;
  typeInfo!: AdminResult;

  buildForm(controls = false): object {
    const { jobType, isSystem, arName, enName } = this;
    return {
      jobType: controls ? [jobType, CustomValidators.required] : jobType,
      isSystem: controls ? [isSystem, CustomValidators.required] : isSystem,
      arName: controls ? [arName, CustomValidators.required] : arName,
      enName: controls ? [enName, CustomValidators.required] : enName,
    };
  }
}
