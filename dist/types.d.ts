import type { DefineComponent } from 'vue'

export interface IconProps {
  class?: string;
  style?: string;
  [key: string]: any;
}

declare module '@gui/icons/**/*.js' {
  const component: DefineComponent<IconProps>;
  export default component;
}
