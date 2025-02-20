import PageHeader from '@/components/page-header';

export default function OurHistory() {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-16 lg:px-16">
        <PageHeader
          title="Quality Inspection"
          description="ZetarMold was founded in 2020 by a team of experienced professionals who are dedicated to providing the highest quality injection molding services to their clients."
          href="/contact"
          linkText="Contact our team"
        />
      </div>
    </section>
  );
}
