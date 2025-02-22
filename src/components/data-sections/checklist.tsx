import { type BackgroundVariant, cn, getBackgroundStyles } from '@/lib/utils';

export type Tip = {
  id: string;
  content: string;
};

interface ChecklistProps {
  tips: Tip[];
  background?: BackgroundVariant;
}

export default function Checklist({
  tips,
  background = 'default',
}: ChecklistProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div
        id="checklist-content"
        className={cn('rounded-lg border p-6', getBackgroundStyles(background))}
      >
        <div className="space-y-4">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="group flex items-start gap-4 rounded-md border-l-2 border-transparent px-4 py-3 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <span className="font-mono text-xl text-zinc-400 tabular-nums">
                {String(tip.id).padStart(2, '0')}
              </span>
              <p className="pt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {tip.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
