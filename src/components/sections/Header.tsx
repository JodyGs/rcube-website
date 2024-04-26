import React from "react";
import { RcubeLogo } from "~/svgs";
import Button from "../buttons/Button";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Button
        variant="primary"
        size="default"
        className="col-span-2 border-r-[1px] border-custom-grey-400"
      >
        <div>_</div>
        <div className="font-satoshi text-xs uppercase leading-4">Browse</div>
      </Button>
      <div className="col-span-14 col-start-3 col-end-17">
        <Link href={"/"}>
          <RcubeLogo className="mx-10 my-[30px] w-[100px] text-custom-gold-500" />
        </Link>
      </div>
      <Button
        variant="primary"
        size="default"
        className="col-span-2 col-start-17 border-l-[1px] border-custom-grey-400"
      >
        Sign out
      </Button>
    </>
  );
}
