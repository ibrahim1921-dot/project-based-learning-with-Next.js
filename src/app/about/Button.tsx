"use client";
import React, { useState } from "react";

interface Post {
    id: number;
    title: string;
    firstName: string;
}

export default function Button({ data }: { data?: unknown }) {
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <button onClick={() => setShowData(!showData)}>
        {showData ? "Hide Data" : "Click to see data"}
      </button>
      {showData && (
        <ul>
            {Array.isArray(data) && data.map((item: Post) => (
                <li key={item.id}>{item.firstName}</li>
            ))}
        </ul>
      )}
    </div>
  );
}
