export interface AccountObject {
  id: string;
  accountHolder?: string;
  accountNumber?: string;
  accountBalance?: string;
}

export interface DocumentObject {
  documentTypeLabel: string;
  documentTypeNumber: string;
}

export interface InputFieldProps {
  id?: string;
  inputType?: string;
  halfWidth?: boolean;
  value?: string;
  handleCalenderClick?: () => void;
  placeholder?: string;
  sendRef?: React.LegacyRef<HTMLInputElement> 
  handleValueChange?: () => void;
}

export interface ItemObject {
  label?: string;
  value?: string;
}

export interface ExpandableItemProps {
  title: string;
  details?: ItemObject[];
  displayDownloadButton?: boolean;
  filename?: string
}
