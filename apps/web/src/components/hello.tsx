"use client";

import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log(`
|￣￣￣￣￣￣￣￣￣￣￣￣|
| Open-source ≠ Free |
|____________________|
      \\ (•◡•) /
       \\     /
        -————
        |   |
       _|   |_

Hi There 👋 This is Pascal!

Love the design? Star ✨ on https://github.com/Byabasaija/vcard_portfolio
`);
  }, []);

  return null;
}

export default Hello;
