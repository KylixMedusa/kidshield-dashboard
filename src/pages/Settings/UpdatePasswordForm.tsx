import React, { useState } from "react";

import { toast } from "react-hot-toast";

import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";

import UserAPI from "../../api/user";

const UpdatePasswordForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const values = new FormData(form);

    const password = values.get("password") as string;
    const confirmPassword = values.get("confirm-password") as string;

    if (!password || !confirmPassword) {
      toast.error("Please fill all the required fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      setIsSubmitting(true);
      const resp = await UserAPI.updatePassword(password);
      if (resp.status === 200) {
        toast.success("Password updated successfully.");

        // Clear the form
        form.reset();
      } else {
        toast.error("Failed to update password.");
      }
    } catch (err) {
      toast.error("Failed to update password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full shadow-none border">
      <CardHeader>
        <h4 className="text-lg font-semibold text-gray-700">Update Password</h4>
      </CardHeader>
      <CardBody>
        <form
          className="flex flex-col gap-4 justify-between h-full"
          onSubmit={onSubmit}
        >
          <Input
            name="password"
            isRequired
            label="Password"
            placeholder="Enter new password"
            type="password"
          />
          <Input
            name="confirm-password"
            isRequired
            label="Confirm Password"
            placeholder="Confirm new password"
            type="password"
          />
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

export default UpdatePasswordForm;
