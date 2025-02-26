import { type DropdownItem } from '@/constants/nav-link';

export interface MobileMenuItemProps {
  item: DropdownItem;
  depth?: number;
  onClose?: () => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MegaMenuSectionProps {
  item: DropdownItem;
  className?: string;
}

export interface ServiceMenuItemProps {
  serviceItem: DropdownItem;
  isActive: boolean;
  onMouseEnter: () => void;
}
