import React from "react";
import { RcubeLogo } from "~/svgs";
import { NAVIGATION } from "~/utils/constants";
import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="col-span-5 col-start-2 space-y-8 py-20 text-custom-grey-300">
        <RcubeLogo className="w-[144px] " />
        <h3 className="min-h-[171px] max-w-[344px] leading-6">
          The  360° platform for asset management entrepreneurs.
        </h3>
        <div>
          <div className="space-y-4">
            {NAVIGATION.rcubeInfos.map(
              ({ name, firstLine, secondLine }, i, arr) => (
                <div
                  className={clsx(i === arr.length - 1 && "text-white")}
                  key={name}
                >
                  <p>{firstLine}</p>
                  <p>{secondLine}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="col-span-6 border-x-[1px] border-custom-grey-400 pb-[120px]">
        <h4 className="font-satoshi px-12 py-20 text-3xl">Legal</h4>
        <div className="space-y-4 text-custom-grey-100">
          <ul>
            {NAVIGATION.legal.map(({ name, href }) => (
              <li
                className="border-b-[1px] border-custom-grey-400 px-12 py-4 first:border-t-[1px]"
                key={name}
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-6 pb-[120px]">
        <h4 className="font-satoshi px-12 py-20 text-3xl">Social</h4>
        <div className="space-y-4 text-custom-grey-100">
          <ul>
            {NAVIGATION.social.map(({ name, href }) => (
              <li
                className="border-b-[1px] border-custom-grey-400 px-12 py-4 first:border-t-[1px]"
                key={name}
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
