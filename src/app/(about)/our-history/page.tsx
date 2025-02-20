import HistoryMilestones from './milestones';
import HistoryEvents from './events';
import PageHeader from '@/components/page-header';

export default function OurHistory() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container flex flex-col gap-24">
        <PageHeader
          title="Our Professional Team"
          description="Zetar boasts a team of 8 senior engineers specializing in injection molding product design and mold design, complemented by 30 engineers skilled in mold making and injection molding, along with a group of highly experienced senior workers."
          linkText="Contact our team"
          href="/contact"
        />
        <HistoryMilestones />
        <HistoryEvents />
      </div>
    </section>
  );
}
