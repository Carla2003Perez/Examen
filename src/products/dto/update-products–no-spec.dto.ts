import { PartialType } from '@nestjs/mapped-types';
import { CreateProducts–noSpecDto } from './create-products–no-spec.dto';

export class UpdateProducts–noSpecDto extends PartialType(CreateProducts–noSpecDto) {}
