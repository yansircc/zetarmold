import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function ThankYouPage() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h1 className="my-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl lg:text-5xl">
            Thank You for Your Message
          </h1>
          <p className="text-muted-foreground mb-8 lg:max-w-3xl lg:text-lg">
            We have received your inquiry and will get back to you within one
            business day. Our team looks forward to discussing your needs.
          </p>
          <Link href="/">
            <Button>
              Return to Home <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
