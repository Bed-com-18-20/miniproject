import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value.firstname || !value.lastname) {
      throw new BadRequestException('Cannot Access such input');
    }

    return value;
  }
}