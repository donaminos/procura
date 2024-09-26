"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createServerSBClient } from "@/supabase/lib/sbClient";

export async function $signUp(formData: FormData) {
  const supabase = createServerSBClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullName") as string;
  const role = formData.get("role") as string;

  try {
    const { data: userData, error: createUserError } =
      await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: fullName, role },
      });

    if (createUserError) throw createUserError;

    if (userData.user) {
      // Add user details to your custom users table
      const { error: profileError } = await supabase
        .from("users")
        .insert([{ id: userData.user.id, email, full_name: fullName, role }]);

      if (profileError) throw profileError;

      // Sign in the user
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      revalidatePath("/dashboard");
      return { success: true, userId: userData.user.id };
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: errorMessage };
  }
}

export async function $signin(formData: FormData) {
  const supabase = createServerSBClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
