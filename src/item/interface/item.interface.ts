import { baseInterface } from '../../sharedInterface/base.interface';

export interface item extends baseInterface {
  name: string;
  description?: string;
  qty: number;
}
