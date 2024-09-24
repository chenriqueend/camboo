import { Header } from "@/components/feed/Header/Header";
import { APP_CONFIG } from "@/config";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientLayout from "../Client/ClientLayout";
import { friends } from "@/components/chat/FriendMock";
import { FriendsContainer } from "@/components/chat/FriendsConteiner";

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
      <div className="fixed bottom-4 right-4 z-100 e p-4 hidden md:flex gap-2">
        <FriendsContainer friends={friends} />{" "}
        {/* Renderiza o FriendsContainer */}
      </div>
    </main>
  );
}
