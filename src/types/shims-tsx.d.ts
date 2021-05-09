/* eslint-disable @typescript-eslint/ban-types */
declare module '*.tsx' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
