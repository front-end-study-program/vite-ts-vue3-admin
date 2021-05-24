import { defineComponent, KeepAlive } from 'vue';
import { RouterView } from 'vue-router';
export default defineComponent({
  render() {
    return (
      <>
        <KeepAlive>
          <RouterView />
        </KeepAlive>
      </>
    );
  },
});
