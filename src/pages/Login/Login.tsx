import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Link,
} from "@nextui-org/react";

import AuthAPI from "../../api/auth";
import Assets from "../../assets/Assets";
import { useApp } from "../../context";
import ROUTES from "../../types/routes";
import { emailRegex, getHttpErrorMessage } from "../../utils";
import { setLocalData } from "../../utils/localData";

const Login: React.FC = () => {
  const { setUser, setIsLoggedIn } = useApp();
  const navigate = useNavigate();

  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsSubmitting(true);
      const resp = await AuthAPI.login({ email, password });
      if (resp.status === 200) {
        const { token, user } = resp.data.result;
        setUser(user);
        setIsLoggedIn(true);
        setLocalData(token);

        // Redirect to dashboard
        navigate(ROUTES.DASHBOARD, { replace: true });
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      const errorMessage = getHttpErrorMessage(err);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = e.currentTarget as HTMLFormElement;

    const values = new FormData(form);

    const email = values.get("email") as string;
    const password = values.get("password") as string;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");

    handleLogin(email, password);
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center login-background">
      <Card className="max-w-full w-[340px] h-[400px] login-card">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <img
                  src={Assets.images.logo}
                  alt="logo"
                  className="rounded-full w-full h-full"
                />
              </div>
              <h1 className="text-default-900 text-xl font-bold">
                Kid
                <span className="text-primary">Shield</span>
              </h1>
            </div>
            <h3 className="text-default-900 text-sm font-medium">
              Welcome back! Please login to your account.
            </h3>
          </div>
        </CardHeader>
        <CardBody className="overflow-hidden">
          <form
            className="flex flex-col gap-4 justify-between h-full"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-4">
              <Input
                name="email"
                isRequired
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <Input
                name="password"
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-2">
              {error && (
                <p className="text-center text-sm text-danger">{error}</p>
              )}
              <p className="text-center text-small">
                Need to create an account?{" "}
                <Link size="sm" href={ROUTES.REGISTER}>
                  Sign up
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button
                  type="submit"
                  fullWidth
                  color="primary"
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting}
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
