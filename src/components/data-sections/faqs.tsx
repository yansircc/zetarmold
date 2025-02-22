import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { generateId } from '@/app/utils/generateId';

export type Faq = {
  question: string;
  answer: string;
};

interface FaqsProps {
  faqs: Faq[];
  /**
   * Accordion type - determines if multiple sections can be open at once
   * @default 'multiple'
   */
  type?: 'single' | 'multiple';
  /**
   * Whether an accordion item can be collapsed after it has been opened
   * Only applies when type is 'single'
   * @default true
   */
  collapsible?: boolean;
  /** Whether to expand the first FAQ item by default */
  defaultExpandFirst?: boolean;
}

export function Faqs({
  faqs,
  type = 'multiple',
  collapsible = true,
  defaultExpandFirst = false,
}: FaqsProps) {
  const faqsWithIds = faqs.map((faq) => ({
    ...faq,
    id: generateId(faq.question),
  }));

  const gridClassName =
    type === 'single'
      ? 'col-span-2' // 单列布局
      : 'col-span-2 grid gap-8 md:grid-cols-2'; // 两列布局

  if (type === 'single') {
    return (
      <div className="grid gap-8">
        <Accordion
          type="single"
          collapsible={collapsible}
          defaultValue={defaultExpandFirst ? faqsWithIds[0]?.id : undefined}
          className={gridClassName}
        >
          {faqsWithIds.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="text-left font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div
                  className="prose prose-neutral text-muted-foreground dark:prose-invert lg:text-lg"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Accordion
        type="multiple"
        defaultValue={defaultExpandFirst ? [faqsWithIds[0]?.id] : []}
        className={gridClassName}
      >
        {faqsWithIds.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
              <div className="text-left font-medium sm:py-1 lg:py-2 lg:text-lg">
                {item.question}
              </div>
            </AccordionTrigger>
            <AccordionContent className="sm:mb-1 lg:mb-2">
              <div
                className="prose prose-neutral text-muted-foreground dark:prose-invert lg:text-lg"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
