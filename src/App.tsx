import { defineComponent } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import Setting from '@/layout/settings';

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();

    return () => (
      <>
        <RouterView></RouterView>
        {router.currentRoute.value.path !== '/login' && (
          <div class="setting-container">
            <Setting />
          </div>
        )}
      </>
    );
  },
});
