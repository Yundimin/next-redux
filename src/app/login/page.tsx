"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setAuth } from "@/store/slices/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(setAuth(data));
      router.push("/");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-6">로그인</h1>

      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border mb-4 rounded"
      />

      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border mb-6 rounded"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
      >
        로그인
      </button>
    </div>
  );
}
