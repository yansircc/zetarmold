import { Mail, MapPin, MessagesSquare, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-14">
          <span className="text-sm font-semibold">Reach Us</span>
          <h1 className="mt-1 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            Speak with Our Friendly Team
          </h1>
          <p className="text-muted-foreground text-lg">
            We&apos;d love to assist you. Fill out the form or drop us an email.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <Mail className="mb-3 h-6 w-auto" />
              <p className="mb-2 text-lg font-semibold">Email Us</p>
              <p className="text-muted-foreground mb-3">
                Send drawings and detailed requirements.
              </p>
              <a
                href="mailto:info@zetarmold.com"
                className="font-semibold hover:underline"
              >
                info@zetarmold.com
              </a>
            </div>
            <div>
              <Phone className="mb-3 h-6 w-auto" />
              <p className="mb-2 text-lg font-semibold">
                24-Hour Phone Service
              </p>
              <p className="text-muted-foreground mb-3">
                Available 24/7 for your inquiries.
              </p>
              <a
                href="tel:001-251-277-2275"
                className="font-semibold hover:underline"
              >
                001-251-277-2275
              </a>
            </div>
            <div>
              <MessagesSquare className="mb-3 h-6 w-auto" />
              <p className="mb-2 text-lg font-semibold">WhatsApp Support</p>
              <p className="text-muted-foreground mb-3">
                24-Hour WhatsApp Service
              </p>
              <a
                href="https://wa.me/8618001543806"
                className="font-semibold hover:underline"
              >
                +86 180 0154 3806
              </a>
            </div>
            <div>
              <MapPin className="mb-3 h-6 w-auto" />
              <p className="mb-2 text-lg font-semibold">Visit Us</p>
              <p className="text-muted-foreground mb-3">
                Sales Office Location
              </p>
              <a href="#" className="font-semibold hover:underline">
                No.29 Moyu Road, Jiading District, Shanghai, China
              </a>
            </div>
          </div>
          <div className="bg-muted/50 mx-auto flex w-full flex-col gap-6 rounded-xl p-8 shadow-sm backdrop-blur-sm md:max-w-[464px]">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">
                  First Name<sup className="text-destructive ml-0.5">*</sup>
                </Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="Your First Name"
                  className="bg-white dark:bg-gray-950"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">
                  Last Name<sup className="ml-0.5">*</sup>
                </Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Your Last Name"
                  className="bg-white dark:bg-gray-950"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">
                Email Address<sup className="ml-0.5">*</sup>
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Your Email"
                className="bg-white dark:bg-gray-950"
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">
                Your Message<sup className="ml-0.5">*</sup>
              </Label>
              <Textarea
                placeholder="How can we help you?"
                id="message"
                className="bg-white dark:bg-gray-950"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline">
                  privacy policy
                </a>
              </label>
            </div>
            <Button size="lg" className="w-full">
              Send an Inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
