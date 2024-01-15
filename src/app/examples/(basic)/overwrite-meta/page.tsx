import type { Metadata } from "next";
import Link from "next/link";
import { Meta } from "./_components/meta";

export const metadata: Metadata = {
  title: "[modified] title",
  description: "[modified] description",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Meta />
      <Link href="/examples/overwrite-meta/dynamic">
        go to the dynamic page
      </Link>
    </div>
  );
}