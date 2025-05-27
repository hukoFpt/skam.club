"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <footer className="footer show-bg grid grid-cols-3 grid-rows-[repeat(5,auto)_105px] mt-[105px] mx-auto w-full px-14 py-10 relative">
      <div className="col-start-1 row-start-1">
        <Image src="/footer-logo.png" alt="Open cases" width={65} height={60} />
      </div>
      <div className="col-start-1 row-start-3 mt-6">
        <p className="text-[#9793ba] text-[16px] font-medium">Skam.Club © 2025</p>
        <p className="text-[#58547b] text-[14px] mt-3 whitespace-pre-line">
          Get all your favorite skins at the best prices.{"\n"}All trades are carried out automatically using Steam
          bots.
        </p>
        <p className="text-[#58547b99] mt-3 text-[14px]">
          This site is not affiliated with Valve Corporation, the Steam platform, Skam.Club or any of their
          subsidiaries. All trademarks are the property of their respective owners.
        </p>
      </div>
      <section className="flex flex-col col-start-1 row-start-4 items-start">
        <div className={`${showMore ? "h-auto" : "h-[165px]"} overflow-hidden transition-all duration-300 mt-14`}>
          <h2 className="text-[#58547b] text-[13px] font-semibold mb-[19px]">About Skam.Club</h2>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            Skam.Club is a website created by players for players who share a passion for CS skins, featuring a Provably
            Fair system. The majority of CS2 skins ever released are accessible on our platform!
          </p>
          <p className="ml-2.5 text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            Obtaining CS2 skins has never been simpler:
          </p>
          <ul className="ml-2.5 text-[#58547b] text-[13px] mb-[10px] leading-[1.2] list-disc list-inside">
            <li className="mb-[5px]">Sign in via Steam</li>
            <li className="mb-[5px]">Replenish your balance with money or CS2 skins</li>
            <li className="mb-[5px]">Explore an extensive collection of skins using various site mechanics!</li>
          </ul>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            Skam.Club provides a variety of payment systems, including G2A Pay, credit cards, and even CS2 skins!
            Additionally, special promo codes for balance top-ups are regularly shared on Skam.Club&apos;s social media
            platforms.
          </p>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            Feel free to choose any CS2 case to open if you have sufficient funds. Once the case is opened, you&apos;ll
            receive a CS2 skin and can decide what to do with it. CS2 skins can be withdrawn to your Steam inventory,
            sold back to the website, sent for upgrading, or even exchanged for new ones!
          </p>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            The upgrading feature on Skam.Club allows you to enhance the value of inexpensive skins from cases to more
            valuable ones. This unique feature sets Skam.Club apart, as not all case opening sites offer such an option.
            Be sure to give it a try!
          </p>
          <p className="ml-2.5 text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">How it works:</p>
          <ol className="ml-2.5 text-[#58547b] text-[13px] mb-[10px] leading-[1.2] list-decimal list-inside">
            <li className="mb-[5px]">Select one or more skins from your inventory</li>
            <li className="mb-[5px]">Choose the skin you desire as an upgrade</li>
            <li className="mb-[5px]">Click the Upgrade button</li>
          </ol>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            The success of the upgrade is influenced by the price difference between your selected skins and the desired
            skin. The smaller the gap in price, the higher the probability of a successful upgrade.
          </p>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            To withdraw CS2 skins, follow these steps:
          </p>
          <ol className="ml-2.5 text-[#58547b] text-[13px] mb-[10px] leading-[1.2] list-decimal list-inside">
            <li className="mb-[5px]">Select the desired items in your profile.</li>
            <li className="mb-[5px]">Click the &quot;Take&quot; button.</li>
            <li className="mb-[5px]">Wait for a trade offer in Steam.</li>
            <li className="mb-[5px]">Accept the trade to add the skin to your inventory.</li>
          </ol>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            It&apos;s important to note that Skam.Club does not provide cash withdrawal options. Withdrawals typically
            take only a few minutes since all trades are processed automatically.
          </p>
          <h2 className="text-[#58547b] text-[13px] font-semibold mb-[19px]">Provably Fair</h2>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            Provably Fair is an algorithm implemented by Skam.Club to demonstrate that all rolls and outcomes in case
            openings and other mechanics are genuinely random and remain unaltered. This assures users that there is no
            manipulation of the system, and every participant has an equal chance of obtaining an expensive skin from a
            CS2 case. With PF, predicting future outcomes is impossible; however, users can verify previous results.
          </p>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            This approach ensures the fairness and mathematical accuracy of all results, whether they are wins or
            losses, and eliminates the possibility of individuals manipulating expected numbers. Skam.Club is proud to
            offer one of the most transparent and honest PF systems in the market.
          </p>
          <ul className="ml-2.5 text-[#58547b] text-[13px] mb-[10px] leading-[1.2] list-disc list-outside">
            <li className="mb-[5px] ml-2.5">
              At Skam.Club, you have the ability to review the complete history of all rolls and seed changes. This
              feature ensures that the customization of hit probabilities for specific users is impossible.
            </li>
            <li className="mb-[5px] ml-2.5">
              Skam.Club allows users to inspect the hits and game results of other players, confirming the authenticity
              of their outcomes. This transparency guarantees that other players&apos; game results cannot be falsified.
            </li>
          </ul>
          <p className="text-[#58547b] text-[13px] mb-[10px] leading-[1.2]">
            Furthermore, Skam.Club is unique in offering the ability to check the history of both client and server
            seeds. This data is openly available for verification by anyone at any time.
          </p>
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-2 text-[#58547b] cursor-pointer text-[13px] font-semibold flex items-center uppercase"
        >
          <span className="arrow-icon h-[5px] bg-[#58547b] mr-2.5"></span>
          {showMore ? "Show less" : "Show more"}
        </button>
      </section>
      <div className="flex col-start-3 row-start-1 justify-self-end mt-2.5">
        <Link
          href="/community"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[40px] w-[40px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <span className="community-icon"></span>
        </Link>
        <Link
          href="https://discord.gg/NZz8kYJdmA"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[40px] w-[40px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <span className="discord-icon"></span>
        </Link>
        <Link
          href="https://facebook.com/huko.fpt"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[40px] w-[40px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <span className="facebook-icon"></span>
        </Link>
      </div>
      <div className="flex flex-col col-start-2 row-start-1 row-end-5 items-center justify-end">
        <p className="text-[24px] font-bold tracking-tighter text-center uppercase text-white">
          Your favorite skin is here
        </p>
        <button className="app-button">
          <div className="button__content">Check out</div>
        </button>
      </div>
      <div className="col-start-3 row-start-2 justify-self-end mt-2.5">
        <Link href="/privacy-policy" className="flex text-[#9793ba] gap-2">
          <span className="email-icon"></span>
          <span>lynnie.nguyen.bns@gmail.com</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
