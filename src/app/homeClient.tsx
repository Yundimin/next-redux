"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { logout, setAuth } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

interface Props {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;
}

export default function HomeClient({ user, token }: Props) {
  const reduxUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user && token) {
      dispatch(setAuth({ user, token }));
    }
  }, [dispatch, user, token]);

  const handleLogout = async () => {
    await fetch("/api/logout");
    dispatch(logout());
    router.push("/login");
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">홈페이지</h1>
      {reduxUser ? (
        <>
          <p className="mt-4">환영합니다, {reduxUser.name}님!</p>
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
