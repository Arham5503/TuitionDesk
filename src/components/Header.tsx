import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-fit flex-1 items-center justify-between gap-6 px-6 py-4 font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]">
      {/* Search */}
      <label className="flex h-12 w-full max-w-98 items-center gap-3 rounded-full border border-[#DDE2EA] bg-white px-4 focus-within:border-[#8ED0EE]">
        <Search size={18} className="shrink-0 text-[#566170]" aria-hidden="true" />
        <input
          type="search"
          placeholder="Search student, parent or phone"
          aria-label="Search student, parent or phone"
          className="w-full bg-transparent text-sm outline-none placeholder:text-[#566170]"
        />
      </label>

      <div className="flex shrink-0 items-center gap-3">
        {/* Session */}
        <span className="rounded-full bg-[#ECEAFB] px-3.5 py-2 text-[13px] font-medium">
          Session 2026–27
        </span>

        {/* WhatsApp status */}
        <span className="flex items-center gap-2 rounded-full bg-[#E1F5EE] px-3.5 py-2 text-[13px] font-medium text-[#0A5F54]">
          <span className="size-2 rounded-full bg-[#1D9E75]" aria-hidden="true" />
          WhatsApp connected
        </span>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications (new)"
          className="relative ml-3 grid size-10 place-items-center rounded-full text-[#1E2530] hover:bg-white"
        >
          <Bell size={18} />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-[#E5484D]" aria-hidden="true" />
        </button>

        {/* Account */}
        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <div className="text-[13px] font-bold">Little Genius</div>
            <div className="text-xs text-[#566170]">Owner account</div>
          </div>
          <div className="grid size-10 place-items-center rounded-full bg-[#F7DE9C] text-[13px] font-bold">
            LG
          </div>
        </div>
      </div>
    </header>
  );
}
