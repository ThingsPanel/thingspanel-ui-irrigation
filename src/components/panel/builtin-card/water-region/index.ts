import { defineAsyncComponent } from 'vue';
import type { ICardDefine } from '@/components/panel/card';
import poster from './water-region.png';
export default {
  id: 'water-region',
  type: 'builtin',
  component: defineAsyncComponent(() => import('./component.vue')),
  poster,
  title: 'water-region',
  w: 1000,
  h: 755
} as ICardDefine;
