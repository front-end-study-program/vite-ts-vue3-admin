import { ref, Ref, UnwrapRef } from 'vue';

export default function useTabVal<T>(
  val: T
): [Ref<UnwrapRef<T>>, (arg: T) => void] {
  const valRef = ref<T>(val);
  const setValRef = (newVal: T) => {
    valRef.value = newVal as UnwrapRef<T>;
  };
  return [valRef, setValRef];
}
