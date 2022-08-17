import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.events';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - ANALYTICS', data);
    this.analytics.push({
      email: data.email,
      timestamp: new Date(),
    });
  }
}
