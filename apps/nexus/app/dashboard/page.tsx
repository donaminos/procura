import { redirect } from "next/navigation";

import { Logo } from "@/components/header/Logo";
import { createServerSBClient } from "@/supabase/lib/sbClient";

export default async function DashboardPage() {
  const supabase = createServerSBClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/signin");
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Dashboard {data.user.user_metadata.full_name}
          </h2>
        </div>
      </div>
    </>
  );
}
