import { ref, Ref, UnwrapRef } from 'vue';
export default function useInputVal<T>(
  val: T
): [Ref<UnwrapRef<T>>, (input: InputEvent) => void] {
  const valRef = ref<T>(val);
  const setValRef = (input: InputEvent) => {
    valRef.value = (input.target as HTMLInputElement).value as UnwrapRef<T>;
  };
  return [valRef, setValRef];
}
