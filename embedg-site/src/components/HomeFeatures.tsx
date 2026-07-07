import React from "react";

import {
  CloudIcon,
  CommandLineIcon,
  CursorArrowRippleIcon,
  EyeDropperIcon,
  SparklesIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

const features = [
  {
    name: "Secure Storage",
    description:
      "Store your embed templates in the cloud. Access them anywhere, anytime. Share with your team securely.",
    href: "/docs/save-messages",
    icon: CloudIcon,
  },
  {
    name: "Custom Branding",
    description:
      "Customize every aspect of your embeds. Change usernames, avatars, colors. Full control over your brand.",
    href: "/docs/custom-branding",
    icon: EyeDropperIcon,
  },
  {
    name: "Interactive Payloads",
    description:
      "Deploy buttons and select menus. Execute custom logic. Distribute roles and trigger responses.",
    href: "/docs/interactive-components",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "White Label",
    description:
      "Integrate your own bot. Full control over responses. Make it yours.",
    href: "/docs/white-label",
    icon: TagIcon,
    premium: true,
  },
  {
    name: "Custom Commands",
    description:
      "Write custom commands with advanced logic. Deploy to your server. Full automation.",
    href: "/docs/custom-commands",
    icon: CommandLineIcon,
    premium: true,
  },
  {
    name: "AI Assistant",
    description:
      "Leverage AI to generate embeds. Boost creativity. Accelerate your workflow.",
    href: "/docs/ai-assistant",
    icon: SparklesIcon,
    premium: true,
  },
];

export default function HomeFeatures(): JSX.Element {
  return (
    <div className="bg-dark-2 px-16 border-b border-red/20">
      <div className="max-w-7xl mx-auto text-white py-20 lg:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none mb-16">
          <h2 className="text-4xl font-bold font-mono text-center">
            <span className="text-red">&gt;</span> CAPABILITIES
          </h2>
        </div>
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col border border-red/20 rounded-lg p-6 hover:border-red/50 transition-colors hover:bg-red/5">
                <div className="text-base font-semibold leading-7 text-white">
                  <div
                    className={clsx(
                      "mb-6 flex h-10 w-10 items-center justify-center rounded-lg border",
                      feature.premium ? "border-red/50 bg-red/10" : "border-red/30 bg-red/5"
                    )}
                  >
                    <feature.icon
                      className={clsx("h-6 w-6", feature.premium ? "text-red" : "text-red")}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base mb-1 font-mono">{feature.name}</h3>
                </div>
                <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto ml-0">{feature.description}</p>
                  <p>
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-red hover:text-red-light transition-colors"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
