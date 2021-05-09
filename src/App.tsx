import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
export default defineComponent({
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };
    return {
      count,
      inc,
    };
  },
  render() {
    console.log(this.$route);
    return (
      <>
        <RouterView />
      </>
    );
  },
});
