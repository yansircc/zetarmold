'use client';

import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button variant="outline" onClick={scrollToTop}>
      <ArrowUp className="mr-2 h-4 w-4" />
      Back to top
    </Button>
  );
}
