'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef, type ReactNode } from 'react';

interface AnimatedHeaderContentProps {
  title?: ReactNode;
  description?: ReactNode;
  href?: string;
  linkText?: string;
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  alignment?: 'left' | 'center';
  textColor?: {
    description: string;
  };
  titleId?: string;
}

export function AnimatedHeaderContent({
  title,
  description,
  href,
  linkText,
  headingLevel: Heading,
  alignment = 'left',
  textColor,
  titleId,
}: AnimatedHeaderContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (!title && !description && !href) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn('lg:max-w-xl', alignment === 'center' && 'mx-auto')}
    >
      {title && (
        <motion.div variants={itemVariants}>
          <Heading
            id={titleId}
            className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6"
          >
            {title}
          </Heading>
        </motion.div>
      )}

      {description && (
        <motion.div
          variants={itemVariants}
          className={cn('mb-8 lg:text-lg', textColor?.description)}
        >
          {description}
        </motion.div>
      )}

      {href && linkText && (
        <motion.div variants={itemVariants}>
          <Link
            href={href}
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            style={{
              justifyContent: alignment === 'center' ? 'center' : 'flex-start',
            }}
          >
            {linkText}
            <motion.span
              whileHover={{ x: 4 }}
              className="ml-2 flex items-center"
            >
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.span>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
