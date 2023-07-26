"use client";

import { useState } from "react";

interface Props {
  searchFor: (query: string) => void;
}

export default function Searchfield(props: Props) {
  const [query, setquery] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setquery(e.currentTarget.value);
    props.searchFor(e.currentTarget.value);
  };

  return (
      <input
        placeholder="aventurin"
        type="search"
        value={query}
        onChange={handleChange}
        className="bg-gray-50 w-full max-w-md border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
      />
  );
}
