import React from "react";

import FilterSettingsForm from "./FilterSettingsForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

const Settings: React.FC = () => {
  return (
    <div className="p-4 flex w-full gap-4">
      <FilterSettingsForm />
      <UpdatePasswordForm />
    </div>
  );
};

export default Settings;
