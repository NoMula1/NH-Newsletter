import { SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function HomeHero(): JSX.Element {
  return (
    <div className="bg-dark-2 md:px-16 border-b border-red/20">
      <div className="flex max-w-7xl mx-auto py-20 flex-col lg:flex-row-reverse items-center">
        <div className="lg:w-1/2 px-6 lg:pr-0 lg:pl-12 xl:pl-20 mb-10 lg:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-red/20 blur-3xl rounded-lg"></div>
            <img src="/img/example.jpg" alt="" className="rounded-lg shadow-2xl shadow-red/50 relative border border-red/30" />
          </div>
        </div>
        <div className="lg:w-1/2 px-12">
          <div className="font-mono text-red text-sm mb-4 tracking-widest">
            &gt; NIGHT HAWK NEWSLETTER
          </div>
          <h1 className="text-gray-100 font-bold text-6xl leading-tight mb-6 font-mono">
            CRAFT DISCORD
            <br />
            <span className="text-red">EMBEDS</span>
          </h1>
          <h2 className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
            Penetrate Discord's embed system. Create sophisticated message templates with custom branding, webhooks, and interactive components. Secure your server's communication.
          </h2>
          <div className="flex items-center">
            <a
              className="px-6 py-3 text-xl rounded-md border-2 border-red flex items-center text-red space-x-3 hover:text-white hover:bg-red/20 transition-all font-mono font-bold hover:shadow-lg hover:shadow-red/50"
              href="/app"
            >
              <SparklesIcon className="h-5 w-5" />
              <div>LAUNCH TERMINAL</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
