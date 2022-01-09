import { reactive, toRefs, Ref } from 'vue';
import defaultSettings, {
  navLayoutType,
  SettingsType,
  sliderThemeType,
} from '@/settings';
import Storage from '@/utils/storage';

const STORAGE_SETTINGS = 'settings';
const storageSettings = Storage.getItem(STORAGE_SETTINGS);
const initSettings: SettingsType = storageSettings
  ? JSON.parse(storageSettings)
  : defaultSettings;
const settingsMap = reactive<SettingsType>(initSettings);

type UseSettingsReturnType = {
  sliderTheme: Ref<sliderThemeType>;
  navLayout: Ref<navLayoutType>;
  setSliderTheme: (val: sliderThemeType) => void;
  setNavLayout: (val: navLayoutType) => void;
};

export default function useSettings(): UseSettingsReturnType {
  const setSliderTheme = (val: sliderThemeType) => {
    settingsMap.sliderTheme = val;
    Storage.setItem(STORAGE_SETTINGS, JSON.stringify(settingsMap));
  };
  const setNavLayout = (val: navLayoutType) => {
    settingsMap.navLayout = val;
    Storage.setItem(STORAGE_SETTINGS, JSON.stringify(settingsMap));
  };
  return {
    ...toRefs(settingsMap),
    setSliderTheme,
    setNavLayout,
  };
}
