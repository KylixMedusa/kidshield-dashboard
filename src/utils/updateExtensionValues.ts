import { ImageFilterMode } from "../types/user";

const dispatchEventToExtension = (event: string, data: unknown) => {
  try {
    chrome.runtime?.sendMessage(import.meta.env.VITE_EXTENSION_ID, {
      type: event,
      payload: data,
    });
  } catch (err) { 
    console.log(err);
  }
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
