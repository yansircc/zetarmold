'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, type ReactNode } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
  leftSidebar: ReactNode;
  rightSidebar: ReactNode;
}

export function DocsLayout({
  children,
  leftSidebar,
  rightSidebar,
}: DocsLayoutProps) {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Mobile Nav Buttons */}
      <div className="fixed right-4 bottom-4 z-40 flex gap-2 lg:hidden">
        <Button
          variant="outline"
          size="icon"
          className="bg-background/80 rounded-full backdrop-blur-sm"
          onClick={() => setIsLeftOpen(true)}
        >
          <Menu className="size-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-background/80 rounded-full backdrop-blur-sm xl:hidden"
          onClick={() => setIsRightOpen(true)}
        >
          <Menu className="size-5" />
        </Button>
      </div>

      <div className="flex">
        {/* Left Sidebar - Mobile */}
        <Sheet open={isLeftOpen} onOpenChange={setIsLeftOpen}>
          <SheetContent side="left" className="w-80 border-r p-0">
            <div className="flex h-full flex-col">
              <SheetHeader className="border-b px-4 py-3">
                <SheetTitle>Categories</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto p-4">{leftSidebar}</div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Right Sidebar - Mobile */}
        <Sheet open={isRightOpen} onOpenChange={setIsRightOpen}>
          <SheetContent side="right" className="w-80 border-l p-0">
            <div className="flex h-full flex-col">
              <SheetHeader className="border-b px-4 py-3">
                <SheetTitle>On This Page</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto p-4">{rightSidebar}</div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Left Sidebar - Desktop */}
        <aside className="bg-background/80 fixed inset-y-0 left-0 mt-20 hidden w-64 border-r backdrop-blur-sm lg:block">
          <div className="scrollbar-hide sticky top-0 h-screen overflow-y-auto p-4">
            {leftSidebar}
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 pb-16 lg:pl-64 xl:pr-64">
          {children}
        </main>

        {/* Right Sidebar - Desktop */}
        <aside className="bg-background/80 fixed inset-y-0 right-0 mt-20 hidden w-64 border-l backdrop-blur-sm xl:block">
          <div className="scrollbar-hide sticky top-0 h-screen overflow-y-auto p-4">
            {rightSidebar}
          </div>
        </aside>
      </div>
    </div>
  );
}
