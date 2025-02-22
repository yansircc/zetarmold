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
}

export function Faqs({ faqs }: FaqsProps) {
  const faqsWithIds = faqs.map((faq) => ({
    ...faq,
    id: generateId(faq.question),
  }));

  const leftColumnFaqs = faqsWithIds.slice(
    0,
    Math.ceil(faqsWithIds.length / 2),
  );
  const rightColumnFaqs = faqsWithIds.slice(Math.ceil(faqsWithIds.length / 2));

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Accordion
        type="single"
        collapsible
        defaultValue={faqsWithIds[0].id}
        className="w-full"
      >
        {leftColumnFaqs.map((item) => (
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
      <Accordion type="single" collapsible className="w-full">
        {rightColumnFaqs.map((item) => (
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
