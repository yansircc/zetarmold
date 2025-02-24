import { PageHeader as PageHeaderComponent } from '@/components/page-header';
import { type BackgroundVariant } from '../types';
import { pageInfo } from './data';

export function PageHeader({
  background = 'default',
}: {
  background?: BackgroundVariant;
}) {
  return <PageHeaderComponent {...pageInfo} background={background} />;
}
