import { ImageFilterMode } from "../types/user";

const dispatchEventToExtension = (event: string, data: unknown) => {
  chrome.runtime.sendMessage(import.meta.env.VITE_EXTENSION_ID, {
    type: event,
    payload: data,
  });
};

const setValueToExtension = ({
  isExtensionEnabled,
  imageFilterMode,
}: {
  isExtensionEnabled: boolean;
  imageFilterMode: ImageFilterMode;
}) => {
  dispatchEventToExtension("TOGGLE_EXTENSION", isExtensionEnabled);
  dispatchEventToExtension("CHANGE_FILTER_EFFECT", imageFilterMode);
};

export { setValueToExtension };
