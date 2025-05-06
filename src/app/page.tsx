"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout");
    dispatch(logout());
    router.push("/");
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">홈페이지</h1>
      {user ? (
        <>
          <p className="mt-4">환영합니다, {user.name}님!</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            로그아웃
          </button>
        </>
      ) : (
        <div className="mt-4 text-red-500">
          <p>로그인하지 않았습니다.</p>
          <button
            onClick={() => router.push("/login")}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            로그인하러 가기
          </button>
        </div>
      )}
    </main>
  );
}
