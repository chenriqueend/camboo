import { Header } from "@/components/feed/Header/Header";
import { APP_CONFIG } from "@/config";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientLayout from "../Client/ClientLayout";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if (!isSupabaseConnected || user === null) {
  //   return redirect("/");
  // }

  return (
    <main className="w-full">
      <section
        className="sticky top-0 z-50 w-full p-4"
        style={{ backgroundColor: APP_CONFIG.layout.mainBackgroundColor }}
      >
        <Header />
      </section>
      <div className="flex justify-center items-center mt-6">
        <ClientLayout>{children}</ClientLayout>
      </div>
    </main>
  );
}
