import React from "react";
import { RcubeLogo } from "~/svgs";
import { NAVIGATION } from "~/utils/constants";
import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="col-span-full space-y-8 px-2 py-10 text-custom-grey-300 md:px-12 lg:col-span-5 lg:col-start-2 lg:px-0 lg:py-20">
        <RcubeLogo className="w-[144px]" />
        <h3 className="max-w-[344px] leading-6 lg:min-h-[171px]">
          The 360° platform for asset management entrepreneurs.
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
      <div className="col-span-full border-t-[1px] border-custom-grey-400 lg:col-span-6 lg:border-x-[1px] lg:pb-[120px]">
        <h4 className="px-2 py-10 font-satoshi text-3xl md:px-12 lg:py-20">
          Legal
        </h4>
        <div className="space-y-4 text-custom-grey-100">
          <ul>
            {NAVIGATION.legal.map(({ name, href }) => (
              <li
                className="border-b-[1px] border-custom-grey-400 px-2 py-4 first:border-t-[1px] md:px-12"
                key={name}
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-full pb-10 lg:col-span-6  lg:pb-[120px]">
        <h4 className="px-2 py-10 font-satoshi text-3xl md:px-12 lg:py-20">
          Social
        </h4>
        <div className="space-y-4 text-custom-grey-100">
          <ul>
            {NAVIGATION.social.map(({ name, href }) => (
              <li
                className="border-b-[1px] border-custom-grey-400 px-2 py-4 first:border-t-[1px] md:px-12"
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
