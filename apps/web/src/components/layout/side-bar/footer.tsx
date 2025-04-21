import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-4 px-6 text-center text-sm text-light-gray">
      <div className="mb-2">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          className="inline text-orange-yellow-crayola underline hover:text-opacity-70"
          href="https://pascalbyabasaija.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pascal Byabasaija
        </Link>
      </div>
      {/* <div className="space-x-4">
        <Link
          className="inline text-orange-yellow-crayola underline hover:text-opacity-70"
          href="https://github.com/Byabasaija"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </Link>
        <Link
          className="inline text-orange-yellow-crayola underline hover:text-opacity-70"
          href="/terms"
        >
          Terms
        </Link>
        <Link
          className="inline text-orange-yellow-crayola underline hover:text-opacity-70"
          href="https://docs.1chooo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </Link>
      </div> */}
    </footer>
  );
}

export default Footer;
