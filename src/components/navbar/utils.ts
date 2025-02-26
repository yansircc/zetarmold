import { type DropdownItem } from '@/constants/nav-link';

/**
 * Determines the grid columns class based on the number of items
 */
export function getGridColumns(items: DropdownItem[], _label: string): string {
  const itemCount = items.length;
  if (itemCount <= 3) return 'grid-cols-1';
  if (itemCount <= 6) return 'grid-cols-2';
  return 'grid-cols-3';
}

/**
 * Determines the mega menu width class based on the number of items
 */
export function getMegaMenuWidth(
  items: DropdownItem[],
  _label: string,
): string {
  const itemCount = items.length;
  if (itemCount <= 3) return 'w-[400px]';
  if (itemCount <= 6) return 'w-[600px]';
  return 'w-[800px]';
}

/**
 * Determines if a menu should use a simplified layout
 * based on the number of items and their children
 */
export function shouldUseSimplifiedLayout(
  items: DropdownItem[],
  label?: string,
): boolean {
  // Never use simplified layout for Company section
  if (label === 'Company') return false;

  // If there are 3 or fewer items
  if (items.length <= 3) return true;

  // If there are items but none have children
  const hasAnyChildren = items.some(
    (item) => item.dropdownItems && item.dropdownItems.length > 0,
  );

  return !hasAnyChildren;
}
