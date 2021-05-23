import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import service from '../../request';
export default defineComponent({
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const inc = () => {
      store.commit('increment');
    };
    service.get('/user');
    return () => (
      <>
        {count.value}
        <div>hello home</div>
        <button onClick={inc}>增加</button>
      </>
    );
  },
});
