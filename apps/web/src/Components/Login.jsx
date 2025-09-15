import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../api";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import Toast from "./Toast";
import { MdErrorOutline } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

const Login = () => {
  const [errormessage, setErrormessage] = useState("");
  const [showtoast, setShowToast] = useState(false);
  const [newuser, setNewuser] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      if (!newuser) {
        loginMutation({ value });
      } else {
        RegisterMutation({ value });
      }
    },
  });
  const navigate = useNavigate();

  const { mutate: loginMutation, isPending: isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("userInfo", JSON.stringify(data));
      setErrormessage("");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate({ to: "/" });
      }, 1500);
    },
    onError: (error) => {
      const message = error?.response?.data || error.message;
      setErrormessage(message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
    },
  });

  const { mutate: RegisterMutation, isPending: isLoadingReg } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      setErrormessage("");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
      setNewuser(false);
    },
    onError: (error) => {
      const message = error?.response?.data || error.message;
      setErrormessage(message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
    },
  });

  return (
    <div>
      {showtoast && !errormessage && (
        <Toast
          message={"Successfully logged in"}
          icon={<SiTicktick />}
          color="bg-green-500"
        />
      )}
      {showtoast && !errormessage && newuser && (
        <Toast
          message={"Successfully Registered the user"}
          icon={<SiTicktick />}
          color="bg-green-500"
        />
      )}
      {showtoast && errormessage && (
        <Toast
          message={errormessage}
          icon={<MdErrorOutline />}
          color="bg-red-500"
        />
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <div className="flex  items-center justify-center min-h-screen ">
          <div className="bg-white p-8 w-[400px] h-2xl rounded-xl shadow-lg ">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {newuser ? "Create an account" : "Log In"}
            </h2>
            <div className="flex flex-col gap-4 ">
              <form.Field
                name="email"
                asyncDebounceMs={500}
                validators={{
                  onSubmit: ({ value }) => {
                    if (!value) return "Email is required!";
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value))
                      return "Enter a valid email address!";
                    return undefined;
                  },
                }}
                children={(field) => (
                  <div className="flex flex-col">
                    <input
                      id={field.name}
                      value={field.state.value ?? ""}
                      name={field.name}
                      placeholder="Email Address*"
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                    />
                    {field.state.meta.errors && (
                      <div className="text-red-500  h-3 text-sm mt-1">
                        {field.state.meta.errors}
                      </div>
                    )}
                  </div>
                )}
              />
              <form.Field
                name="password"
                validators={{
                  onSubmit: ({ value }) => {
                    if (!value) return "Password is required!";
                  },
                }}
                children={(field) => (
                  <div className="flex flex-col">
                    <input
                      id={field.name}
                      value={field.state.value ?? ""}
                      name={field.name}
                      placeholder="Password*"
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                    />
                    {field.state.meta.errors && (
                      <div className="text-red-500 h-3  text-sm mt-1">
                        {field.state.meta.errors}
                      </div>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-sm ">Don't have an account?</span>
              <span
                className="text-sm cursor-pointer text-blue-700"
                onClick={() => setNewuser(!newuser)}
              >
                {!newuser ? "Create an account?" : "Already have an account?"}
              </span>
            </div>

            <button
              type="submit"
              className="bg-blue-600 flex items-center w-full justify-center text-white px-4 mt-4 py-2 rounded-xl shadow hover:bg-blue-700 transition-all cursor-pointer"
            >
              {(isLoading || isLoadingReg) && (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {!newuser ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
