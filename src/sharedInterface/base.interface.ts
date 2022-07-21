export interface baseInterface {
  id: string;
  isActive: boolean;
  isArchived: boolean;
  createDateTime: Date;
  createdBy: string;
  lastChangedDateTime: Date;
  lastChangedBy: string;
  internalComment: string | null;
}
