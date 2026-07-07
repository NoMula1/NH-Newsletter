import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function HomeHeader(): JSX.Element {
  return (
    <div className="bg-dark-1 px-5 border-b border-red/30">
      <div className="flex items-center justify-between py-4 max-w-7xl mx-auto">
        <div className="items-center flex space-x-4">
          <div className="font-bold text-2xl text-red font-mono tracking-wider hidden lg:block">
            ▌ NIGHT HAWK
          </div>
          <div className="font-bold text-xl text-red font-mono lg:hidden">
            ▌ NH
          </div>
        </div>
        <div className="items-center flex space-x-5 md:space-x-8">
          <div className="space-x-3 flex items-center">
            <a
              className="hover:text-red text-gray-400 hidden md:block font-mono text-sm transition-colors"
              href="/source"
            >
              &gt; source
            </a>
            <div className="h-1 w-1 bg-red/50 rounded-full hidden md:block"></div>
            <a
              className="hover:text-red text-gray-400 hidden sm:block font-mono text-sm transition-colors"
              href="/discord"
            >
              &gt; discord
            </a>
            <div className="h-1 w-1 bg-red/50 rounded-full hidden sm:block"></div>
            <a className="hover:text-red text-gray-400 font-mono text-sm transition-colors" href="/docs">
              <span className="hidden sm:inline">&gt; docs</span>
              <span className="inline sm:hidden">&gt; ?</span>
            </a>
          </div>
          <a
            className="px-4 py-2 text-lg rounded-md border-2 border-red flex items-center text-red space-x-3 hover:text-white hover:bg-red/20 transition-all font-mono font-bold hover:shadow-lg hover:shadow-red/50"
            href="/app"
          >
            <SparklesIcon className="h-5 w-5" />
            <div>LAUNCH</div>
          </a>
        </div>
      </div>
    </div>
  );
}
