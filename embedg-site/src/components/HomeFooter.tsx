import React from "react";

export default function HomeFooter(): JSX.Element {
  return (
    <div className="bg-dark-1 px-16 text-white border-t border-red/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-12">
          <div className="space-y-3">
            <div className="text-lg font-medium font-mono text-red">&gt; docs</div>
            <div className="space-y-2 flex flex-col">
              <a href="/docs" className="text-gray-400 hover:text-red transition-colors font-mono text-sm">
                tutorial
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-lg font-medium font-mono text-red">&gt; community</div>
            <div className="space-y-2 flex flex-col">
              <a
                href="/source"
                target="_blank"
                className="text-gray-400 hover:text-red transition-colors font-mono text-sm"
              >
                github
              </a>
              <a
                href="/discord"
                target="_blank"
                className="text-gray-400 hover:text-red transition-colors font-mono text-sm"
              >
                discord
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-lg font-medium font-mono text-red">&gt; legal</div>
            <div className="space-y-2 flex flex-col">
              <a href="/terms" className="text-gray-400 hover:text-red transition-colors font-mono text-sm">
                terms
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-red transition-colors font-mono text-sm">
                privacy
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 pb-6 font-mono text-xs border-t border-red/10 pt-6">
          {`[${new Date().getFullYear()}] NIGHT HAWK | Not affiliated with Discord Inc.`}
        </div>
      </div>
    </div>
  );
}
