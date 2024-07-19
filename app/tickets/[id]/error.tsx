"use client";

import ReturnButton from "@/app/components/returnButton";

export default function Error() {
  return (
    <main className="text-center">
      <h2>Something went wrong!</h2>
      <div>We can&apos;t find this ticket in our system.</div>
      <div className="flex justify-center w-full my-6">
        <ReturnButton path="/tickets" />
      </div>
    </main>
  );
}
