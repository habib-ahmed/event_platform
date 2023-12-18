import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center md:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>@Copyright 2023 - 2024. All Rights reserved by Habib Ahmed</p>
      </div>
    </footer>
  );
}
