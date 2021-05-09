import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const inc = () => {
      store.commit('increment');
    };
    return {
      count,
      inc,
    };
  },
  render() {
    const { count, inc } = this;
    return (
      <>
        {count}
        <div>hello home</div>
        <button onClick={inc}>增加</button>
      </>
    );
  },
});
