// app/page.tsx
"use client";

import { useCounterStore } from "@/store/useCounter";

export default function HomePage() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <h1 className="text-2xl font-bold">Zustand Counter Example</h1>
      <p className="text-lg">Current Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={increase}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +1
        </button>
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -1
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
