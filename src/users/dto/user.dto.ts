import { baseInterface } from '../../sharedInterface/base.interface';

export interface user extends baseInterface {
  name: string;
  email?: string;
  phoneNumber: string;
  city: string;
  encryptedPassword?: string;
}
