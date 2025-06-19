import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): string { 
    return `Welcome to Job Management API! Add \'/api\' in the url to navigate to the swagger UI`;
  }
}
