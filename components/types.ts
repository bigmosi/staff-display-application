export interface StaffMemberProps {
    name: string;
    role: string;
    reportsTo?: string;
    onDelete: () => void;
    onUpdate: () => void;
  }
  