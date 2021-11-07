import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function CoffeeStore() {
  const router = useRouter();

  return (
    <div>
      Coffee Store Component
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default CoffeeStore;
