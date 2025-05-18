import ExternalLink from "@/app/components/shared/ExternalLink";
import StarDecoration from "@/app/components/shared/StarDecoration";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-retro-black text-retro-cream py-12 px-6">
      {/* Decorative elements */}
      <StarDecoration className="absolute top-[20%] left-[5%] w-6 h-6 opacity-20" />
      <StarDecoration className="absolute bottom-[30%] right-[10%] w-8 h-8 opacity-20 rotate-45" />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* GitHub link */}
        <div>
          <ExternalLink
            href="https://github.com/phrazzld/trump-goggles"
            className="text-retro-cream hover:text-retro-gold transition-colors text-lg font-semibold"
          >
            View on GitHub →
          </ExternalLink>
        </div>

        {/* Copyright */}
        <div className="text-sm text-retro-cream/70">
          © {currentYear} Trump Goggles. All rights reserved.
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-retro-cream/50 max-w-2xl mx-auto">
          Trump Goggles is a browser extension created for entertainment purposes
          only. This extension and its creators are not affiliated with,
          endorsed by, or connected to Donald Trump or any of his associated
          entities. All trademarks are property of their respective owners.
        </div>

        {/* Made with love */}
        <div className="text-xs text-retro-cream/40 pt-4">
          Made with <span className="text-retro-red">♥</span> for the internet
        </div>
      </div>
    </footer>
  );
}