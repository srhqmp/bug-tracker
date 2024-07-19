"use client";

import { useRouter } from "next/navigation";

export default function ReturnButton({ path }: { path: string }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <button className="btn-secondary" onClick={handleClick}>
      Go Back
    </button>
  );
}
