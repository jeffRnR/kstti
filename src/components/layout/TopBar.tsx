import { Mail, Phone, BadgeCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-white/10 bg-[#0A0A0A] text-sm text-neutral-400">
      <div className="container-xl flex h-10 items-center justify-between">

        <div className="flex items-center gap-4">
          {/* Always visible */}
          <a
            href="tel:+254713255324"
            className="flex items-center gap-2 transition-colors hover:text-[#E5AD23]"
          >
            <Phone size={12} className="text-[#E5AD23]" />
            <span className="font-medium text-[0.55rem] sm:text-xs">+254 713 255 324</span>
          </a>

          <span className="text-neutral-600 sm:block">|</span>
          <a
            href="tel:+254798469493"
            className="items-center gap-2 transition-colors hover:text-[#E5AD23] flex"
          >
            <span className="font-medium text-[0.55rem] sm:text-xs">+254 798 469 493</span>
          </a>
          <a
            href="mailto:info@kstti.ac.ke"
            className="hidden items-center gap-2 transition-colors hover:text-[#E5AD23] md:flex"
          >
            <Mail size={12} className="text-[#E5AD23]" />
            <span className="font-medium text-xs">info@kstti.ac.ke</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <BadgeCheck size={12} className="text-[#E5AD23]" />
            <span className="text-[0.55rem] sm:text-xs font-bold uppercase text-[#E5AD23]">
              TVETA Accredited
            </span>
          </div>

          <span className="hidden text-xs font-semibold uppercase text-neutral-500 md:block">
            Kerugoya&nbsp;&nbsp;·&nbsp;&nbsp;Ruai Campus
          </span>
        </div>

      </div>
    </div>
  );
}