'use client';

import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronRight, Menu, X } from 'lucide-react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navLinks } from '@/constants/nav-link';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="bg-background fixed inset-0 top-16 z-50 flex flex-col overflow-y-auto lg:hidden">
      <div className="flex-1">
        {!activeSubmenu ? (
          <div className="divide-border divide-y">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="flex w-full items-center justify-between px-6 py-4 text-sm"
                onClick={() =>
                  link.dropdownItems && setActiveSubmenu(link.label)
                }
              >
                <span>{link.label}</span>
                {link.dropdownItems && <ChevronRight className="h-4 w-4" />}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button
              className="flex items-center gap-2 px-6 py-4 text-sm"
              onClick={() => setActiveSubmenu(null)}
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              <span>Back</span>
            </button>
            <div className="divide-border divide-y">
              {navLinks
                .find((link) => link.label === activeSubmenu)
                ?.dropdownItems?.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 px-6 py-4"
                    onClick={onClose}
                  >
                    {item.icon && <item.icon className="mt-0.5 h-5 w-5" />}
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      {item.description && (
                        <div className="text-muted-foreground mt-1 text-sm">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <nav className="container flex h-16 items-center">
        <div className="flex w-full items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-xl font-semibold">ZetarMold</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navLinks.map((link) =>
                link.dropdownItems ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {link.dropdownItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                              >
                                <div className="flex items-center gap-2">
                                  {item.icon && (
                                    <item.icon className="h-5 w-5" />
                                  )}
                                  <span className="text-sm font-medium">
                                    {item.title}
                                  </span>
                                </div>
                                {item.description && (
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                    {item.description}
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-base',
                        pathname === link.href && 'text-muted-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
