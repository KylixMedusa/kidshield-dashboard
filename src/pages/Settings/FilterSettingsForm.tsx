import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

import UserAPI from "../../api/user";
import { useApp } from "../../context";
import { ImageFilterMode } from "../../types/user";
import { setValueToExtension } from "../../utils/updateExtensionValues";

const FilterSettingsForm = () => {
  const { user, setUser } = useApp();

  const [isExtensionEnabled, setIsExtensionEnabled] = useState<boolean>(false);
  const [filterStrictness, setFilterStrictness] = useState<number>(0);
  const [imageFilterMode, setImageFilterMode] = useState<ImageFilterMode>(
    ImageFilterMode.HIDE
  );

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageFilterMode || !filterStrictness) {
      toast.error("Please fill all the required fields.");
      return;
    }

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const resp = await UserAPI.update({
        isExtensionEnabled,
        filterStrictness,
        imageFilterMode,
      });
      if (resp.status === 200) {
        toast.success("Filter settings updated successfully.");
        setUser(resp.data.result);
      } else {
        toast.error("Failed to update filter settings.");
      }
    } catch (err) {
      toast.error("Failed to update filter settings.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (user) {
      setIsExtensionEnabled(user.isExtensionEnabled);
      setFilterStrictness(user.filterStrictness);
      setImageFilterMode(user.imageFilterMode);

      setValueToExtension({
        isExtensionEnabled: user.isExtensionEnabled,
        imageFilterMode: user.imageFilterMode,
      });
    }
  }, [user]);

  return (
    <Card className="w-full shadow-none border">
      <CardHeader>
        <h4 className="text-lg font-semibold text-gray-700">Filter Settings</h4>
      </CardHeader>
      <CardBody>
        <form
          id="filter-settings-form"
          className="flex flex-col gap-4 justify-between h-full"
          onSubmit={onSubmit}
        >
          <div className="flex items-center gap-1">
            <Checkbox
              name="isExtensionEnabled"
              required
              checked={isExtensionEnabled}
              isSelected={isExtensionEnabled}
              onChange={(e) => setIsExtensionEnabled(e.target.checked)}
            />
            <label
              className="text-gray-500 text-sm"
              htmlFor="isExtensionEnabled"
            >
              Enable this setting to block adult content
            </label>
          </div>
          <Input
            type="range"
            isRequired
            name="filterStrictness"
            label="Filter Strictness"
            min={0}
            max={100}
            value={filterStrictness.toString()}
            onChange={(e) => setFilterStrictness(+e.target.value)}
          />
          <Select
            name="imageFilterMode"
            isRequired
            label="Image Filter Mode"
            placeholder="Select image filter mode"
            value={imageFilterMode}
            selectedKeys={[imageFilterMode]}
            onChange={(e) =>
              setImageFilterMode(e.target.value as ImageFilterMode)
            }
          >
            {Object.values(ImageFilterMode).map((mode) => (
              <SelectItem key={mode} value={mode}>
                {mode.toTitleCase()}
              </SelectItem>
            ))}
          </Select>
          <Button
            type="submit"
            fullWidth
            color="primary"
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
          >
            Update
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default FilterSettingsForm;
