import { Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageWithDialog } from './media-dialog';
import { getVideoCoverById } from '@/app/utils/getVideoCoverById';
// 定义时间轴单个项目的接口
export type TimelineItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  youtubeId: string;
};

// 定义时间轴组件的 props 接口
export interface TimelineProps {
  items: TimelineItem[];
}

// 时间轴组件
export function Timeline({ items }: TimelineProps) {
  // 内部 DiagonalPattern 组件，用于渲染背景图案
  const DiagonalPattern = ({
    className,
    patternColor = 'hsl(var(--foreground))',
    patternOpacity = 0.15,
  }: {
    className?: string;
    patternColor?: string;
    patternOpacity?: number;
  }) => {
    const svgPattern = `url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${patternColor}' fill-opacity='${patternOpacity}' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`;

    return (
      <div
        className={cn('h-full w-full border-2 border-dashed', className)}
        style={{ backgroundImage: svgPattern }}
      />
    );
  };

  return (
    <>
      {/* 时间轴部分：根据 items 动态渲染 */}
      <div className="container overflow-hidden pb-40 lg:pt-20 [&>*:last-child]:pb-20 [&>div>div:first-child]:!pt-20">
        {items.map((item, index) => {
          // 根据索引奇偶性决定是否反转
          const isReversed = index % 2 === 1;

          return (
            <div key={index} className="relative flex">
              <div
                className={`flex w-full justify-center px-1 py-10 text-end md:gap-6 lg:gap-10 ${isReversed ? 'lg:flex-row-reverse lg:text-start' : ''}`}
              >
                {/* 大屏幕下的标题和描述 */}
                <div className="flex-1 max-lg:hidden">
                  <h3 className="text-2xl tracking-[-0.96px]">{item.title}</h3>
                  <p
                    className={`text-muted-foreground mt-2.5 max-w-[300px] tracking-[-0.32px] text-balance ${isReversed ? '' : 'ml-auto'}`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* 图标部分 */}
                <div className="bg-background z-[-1] size-fit -translate-y-5 p-4 max-lg:-translate-x-4">
                  <div className="bg-card rounded-[10px] border p-[5px] shadow-md">
                    <div className="bg-muted size-fit rounded-md border p-1">
                      <item.icon className="size-4 shrink-0" />
                    </div>
                  </div>
                </div>

                {/* 图片和移动端标题描述部分 */}
                <div className="flex-1 max-lg:-translate-x-4">
                  <div className="text-start lg:pointer-events-none lg:hidden">
                    <h3 className="text-2xl tracking-[-0.96px]">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2.5 mb-10 max-w-[300px] tracking-[-0.32px] text-balance">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-start justify-start">
                    <div
                      className={isReversed ? 'w-full lg:ml-auto' : 'w-full'}
                    >
                      <div className="relative">
                        <ImageWithDialog
                          youtubeId={item.youtubeId}
                          image={
                            item.youtubeId
                              ? getVideoCoverById(item.youtubeId)
                              : undefined
                          }
                          className="h-auto w-full" // 添加 h-auto 确保图片保持原始比例
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 时间轴线 */}
              <div
                className={`absolute z-[-2] h-full w-[3px] translate-x-5 rounded-full lg:left-1/2 lg:-translate-x-1/2 ${index === items.length - 1 ? 'from-foreground/10 via-foreground/10 bg-gradient-to-b to-transparent' : 'bg-foreground/10'}`}
              >
                {index === 0 && (
                  <div className="to-foreground/10 h-4 w-[3px] -translate-y-full bg-gradient-to-b from-transparent" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
