import { JobTitle } from '@models/job-title';
import { ModelInterceptorContract } from 'cast-response';

export class JobTitleInterceptor implements ModelInterceptorContract<JobTitle> {
  send(model: Partial<JobTitle>): Partial<JobTitle> {
    return model;
  }

  receive(model: JobTitle): JobTitle {
    return model;
  }
}
