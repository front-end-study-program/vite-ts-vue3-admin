import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const inc = () => {
      store.commit('increment');
    };
    window
      .fetch('http://192.168.1.7:3000/api/user')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    return () => (
      <>
        {count.value}
        <div>hello home</div>
        <button onClick={inc}>增加</button>
      </>
    );
  },
});
