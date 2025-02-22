import { PageHeader as PageHeaderComponent } from '@/components/page-header';
import { pageInfo } from './data';
import { type BackgroundVariant } from '../types';

export function PageHeader({
  background = 'default',
}: {
  background?: BackgroundVariant;
}) {
  return (
    <PageHeaderComponent
      {...pageInfo}
      background={background}
      alignment="center"
    />
  );
}
