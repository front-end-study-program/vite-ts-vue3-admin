import { defineComponent } from 'vue';
import BaseLayout from './BaseLayout';
import TopLayout from './TopLayout';
import useSettings from './settings/hooks/useSettings';

export default defineComponent({
  name: 'Layout',
  setup() {
    const { sliderTheme, navLayout } = useSettings();

    return () =>
      navLayout.value === 'BaseLayout' ? (
        <BaseLayout sliderTheme={sliderTheme.value} />
      ) : (
        <TopLayout />
      );
  },
});
