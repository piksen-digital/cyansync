// src/pages/auth/callback.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        // ✅ User is logged in
        router.replace("/dashboard");
      } else {
        // ❌ No session found, go back to login
        router.replace("/login");
      }
    };

    handleAuth();
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center text-cyanMain text-xl font-semibold">
      Authenticating...
    </div>
  );
}
