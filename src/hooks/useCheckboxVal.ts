import { ref, Ref, UnwrapRef } from 'vue';

export interface RadioChangeEventTarget {
  checked: boolean;
}
export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
}
export default function useCheckboxVal<T>(
  val: T
): [Ref<UnwrapRef<T>>, (input: RadioChangeEvent) => void] {
  const valRef = ref<T>(val);
  const setValRef = (e: RadioChangeEvent) => {
    valRef.value = e.target.checked as UnwrapRef<T>;
  };
  return [valRef, setValRef];
}
