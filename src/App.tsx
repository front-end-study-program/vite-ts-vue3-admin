import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import Setting from '@/layout/settings';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <RouterView></RouterView>
        <div class="setting-container">
          <Setting />
        </div>
      </>
    );
  },
});
