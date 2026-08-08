// src/components/layout/TopBar.tsx

import { Mail, Phone, BadgeCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-white/10 bg-[#0A0A0A] text-sm text-neutral-400">
      <div className="container-xl flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="tel:+254XXXXXXXXX"
            className="flex items-center gap-2 transition-colors hover:text-[#E5AD23]"
          >
            <Phone size={13} className="text-[#E5AD23]" />
            <span className="font-medium tracking-wide">+254 XXX XXX XXX</span>
          </a>

          <a
            href="mailto:info@kstti.ac.ke"
            className="hidden items-center gap-2 transition-colors hover:text-[#E5AD23] md:flex"
          >
            <Mail size={13} className="text-[#E5AD23]" />
            <span className="font-medium tracking-wide">info@kstti.ac.ke</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* TVETA accreditation badge */}
          <div className="flex items-center gap-1.5 rounded-xl border border-[#E5AD23]/25 bg-[#E5AD23]/10 px-4 py-3">
            <BadgeCheck size={12} className="text-[#E5AD23]" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#E5AD23]">
              TVETA Accredited
            </span>
          </div>

          <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 md:block">
            Kerugoya&nbsp;&nbsp;·&nbsp;&nbsp;Ruai Campus
          </span>
        </div>
      </div>
    </div>
  );
}