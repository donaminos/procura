"use client";

import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { InputSelect } from "@/components/form/InputSelect";
import { Logo } from "@/components/header/Logo";
import { $signUp } from "@/domains/auth/actions";

type FormType = {
  email: string;
  fullname: string;
  role: "admin" | "user" | "manager";
  password: string;
};

export default function SignupPage() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const result = await $signUp(formData);
      if (!result?.success) throw new Error(result?.error || "Unknown Error");
      return result;
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (err) => console.log(err),
  });

  const form = useForm({
    onSubmit: ({ value }: { value: FormType }) => {
      const { email, password, fullname, role } = value;
      if (email && password && fullname && role) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("fullName", fullname);
        formData.append("role", role);

        mutation.mutate(formData);
      }
    },
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      // @ts-expect-error default value for form only
      role: "",
    },
  });
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign up to streamline your procurement workflow
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            method="POST"
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium leading-6 text-white"
              >
                Full name
              </label>
              <div className="mt-2">
                <form.Field name="fullname">
                  {(field) => {
                    return (
                      <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        required
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    );
                  }}
                </form.Field>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <form.Field name="email">
                  {(field) => {
                    return (
                      <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        type="text"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    );
                  }}
                </form.Field>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div>
                <form.Field name="password">
                  {(field) => {
                    return (
                      <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        type="password"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    );
                  }}
                </form.Field>
              </div>
            </div>

            <div>
              <form.Field name="role">
                {(field) => {
                  return <InputSelect field={field} />;
                }}
              </form.Field>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-20"
                disabled={mutation.isPending}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Already a member?{" "}
            <a
              href="/signin"
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
