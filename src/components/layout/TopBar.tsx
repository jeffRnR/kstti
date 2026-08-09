// src/components/layout/TopBar.tsx

import { Mail, Phone, BadgeCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-white/10 bg-[#0A0A0A] text-sm text-neutral-400">
      <div className="container-xl flex h-10 items-center justify-between">
        <div className="flex items-center sm:gap-6 gap-4 flex-col sm:flex-row"> 
          <a
            href="tel:+254XXXXXXXXX"
            className="flex items-center gap-2 transition-colors hover:text-[#E5AD23]"
          >
            <Phone size={12} className="text-[#E5AD23]" />
            <span className="font-medium text-[0.55rem] sm:text-xs">+254 XXX XXX XXX</span>
          </a>

          <a
            href="mailto:info@kstti.ac.ke"
            className="hidden items-center text-[0.55rem] sm:text-[0.65rem] gap-2 transition-colors hover:text-[#E5AD23] md:flex"
          >
            <Mail size={12} className="text-[#E5AD23]" />
            <span className="font-medium text-[0.5rem] sm:text-xs">info@kstti.ac.ke</span>
          </a>
        </div>

        <div className="flex items-center gap-4 sm:flex-row flex-col ">
          {/* TVETA accreditation badge */}
          <div className="flex items-center gap-1.5 px-4 py-3">
            <BadgeCheck size={12} className="text-[#E5AD23]" />
            <span className="sm:text-[0.65rem] text-[0.55rem] font-bold uppercase text-[#E5AD23]">
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