import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld";
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
    const { count, inc } = this;
    console.log(123);
    return (
      <>
        <HelloWorld />
        <div>{count}</div>
        <button onClick={inc}>增加</button>
      </>
    );
  },
});
