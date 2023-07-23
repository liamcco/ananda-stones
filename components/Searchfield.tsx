"use client";

import { useState } from "react";

interface Props {}

export default function Searchfield(props: Props) {
  const [query, setquery] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setquery(e.currentTarget.value);
  };

  return (
    <div>
      <form>
        <input
          placeholder="aventurin"
          type="search"
          value={query}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
        />
      </form>
    </div>
  );
}