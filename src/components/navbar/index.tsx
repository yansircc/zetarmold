'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navLinks } from '@/constants/nav-link';
import { cn } from '@/lib/utils';

import { MobileMenu } from './mobile-menu';
import { MegaMenuSection } from './mega-menu-section';
import { ServiceMenu } from './service-menu';
import { ResourceMenu } from './resource-menu';
import { SimplifiedMenu } from './simplified-menu';
import {
  getGridColumns,
  getMegaMenuWidth,
  shouldUseSimplifiedLayout,
} from './utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [activeService, setActiveService] = React.useState<string | null>(null);
  const [servicesMenuOpen, setServicesMenuOpen] = React.useState(false);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Find the Services link
  const servicesLink = navLinks.find((link) => link.label === 'Services');
  // Set default active service when menu is opened
  const handleServicesMenuOpen = () => {
    if (!activeService && servicesLink?.dropdownItems?.length) {
      setActiveService(servicesLink.dropdownItems[0].title);
    }
    setServicesMenuOpen(true);
  };

  const handleServicesMenuClose = () => {
    setServicesMenuOpen(false);
  };

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
              {navLinks.map((link, index) => {
                // Special handling for Services section
                if (link.label === 'Services') {
                  return (
                    <NavigationMenuItem key={index} className="relative">
                      <NavigationMenuTrigger
                        onMouseOver={handleServicesMenuOpen}
                        onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                        className="group"
                      >
                        {link.label}
                        <div className="bg-primary absolute right-0 -bottom-1 left-0 h-[2px] scale-x-0 transition-transform group-hover:scale-x-100" />
                        <span className="text-muted-foreground ml-1 text-xs">
                          (Browse Categories)
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        onMouseLeave={handleServicesMenuClose}
                        className={servicesMenuOpen ? 'block' : 'hidden'}
                      >
                        {link.dropdownItems && (
                          <ServiceMenu
                            serviceItems={link.dropdownItems}
                            activeService={
                              activeService ??
                              link.dropdownItems[0]?.title ??
                              null
                            }
                            setActiveService={setActiveService}
                          />
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                // Special handling for Resources section with left-right layout
                if (link.label === 'Resources' && link.dropdownItems) {
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ResourceMenu resourceItems={link.dropdownItems} />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                // Regular handling for other sections
                if (link.dropdownItems) {
                  // Use simplified layout for items with few or no children
                  const useSimplifiedLayout = shouldUseSimplifiedLayout(
                    link.dropdownItems,
                    link.label,
                  );

                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {useSimplifiedLayout ? (
                          <SimplifiedMenu items={link.dropdownItems} />
                        ) : (
                          <div
                            className={cn(
                              'p-4',
                              getMegaMenuWidth(link.dropdownItems, link.label),
                            )}
                          >
                            <div
                              className={cn(
                                'grid grid-cols-2 gap-6',
                                link.label !== 'Company' &&
                                  getGridColumns(
                                    link.dropdownItems,
                                    link.label,
                                  ),
                              )}
                            >
                              {link.dropdownItems.map((item, itemIndex) => (
                                <MegaMenuSection
                                  key={itemIndex}
                                  item={item}
                                  className="border-border"
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={index}>
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
                );
              })}
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
