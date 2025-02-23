import React from 'react';

import { type LucideIcon } from 'lucide-react';

interface SectionWrapperProps {
  title: string;
  description: string | React.ReactNode;
  icon: LucideIcon;
  iconTitle?: string;
  className?: string;
}

export default function SectionWrapper({
  title,
  description,
  icon,
  iconTitle,
  className,
}: SectionWrapperProps) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
      {icon && <div className="text-primary">{React.createElement(icon)}</div>}
      {iconTitle && <div className="text-primary">{iconTitle}</div>}
    </div>
  );
}
