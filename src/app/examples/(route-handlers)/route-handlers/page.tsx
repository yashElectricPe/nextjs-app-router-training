"use client";

import { Boundary } from "@/app/_components/boundary";
import { notFound } from "next/navigation";
import { useFetch } from "./_hooks/useFetch";

export default function Page() {
  const path = "/examples/route-handlers/api";
  const { data, loading, error } = useFetch<{ msg: string }>(path);

  if (loading) {
    return <Boundary label="Loading">Loading...</Boundary>;
  }

  if (!data || error) {
    return notFound();
  }

  return (
    <Boundary label="Page">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg">assigned cookie</h2>
        <p>endpoint: {path}</p>
        <p className="break-all text-gray-400">{data.msg}</p>
      </div>
    </Boundary>
  );
}