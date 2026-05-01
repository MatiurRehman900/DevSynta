export default function SEOIllustration() {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect x="40" y="20" width="400" height="320" rx="20" fill="#EEF2FF" />

      {/* Search bar */}
      <rect x="70" y="45" width="340" height="48" rx="24" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      {/* Search icon */}
      <circle cx="100" cy="69" r="10" stroke="#6366F1" strokeWidth="2" fill="none" />
      <path d="M107 76 L114 83" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
      {/* Search text */}
      <rect x="122" y="63" width="180" height="12" rx="6" fill="#E0E7FF" />
      <rect x="122" y="63" width="120" height="12" rx="6" fill="#C7D2FE" />
      {/* Search button */}
      <rect x="360" y="53" width="38" height="32" rx="16" fill="#6366F1" />
      <path d="M372 69 L376 73 M376 73 L380 69 M376 73 L376 65" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* SERP Results */}
      {/* Result 1 - top ranked */}
      <rect x="70" y="108" width="340" height="58" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      {/* Rank badge */}
      <rect x="82" y="120" width="22" height="22" rx="6" fill="#6366F1" />
      <text x="88" y="135" fontSize="11" fill="white" fontWeight="700">1</text>
      {/* Result content */}
      <rect x="114" y="120" width="200" height="8" rx="4" fill="#6366F1" />
      <rect x="114" y="133" width="260" height="6" rx="3" fill="#C7D2FE" />
      <rect x="114" y="143" width="220" height="6" rx="3" fill="#E0E7FF" />
      {/* Up arrow */}
      <path d="M368 128 L374 122 L380 128" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M374 122 L374 138" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />

      {/* Result 2 */}
      <rect x="70" y="176" width="340" height="50" rx="12" fill="white" stroke="#E0E7FF" strokeWidth="1.5" />
      <rect x="82" y="188" width="22" height="22" rx="6" fill="#E0E7FF" />
      <text x="88" y="203" fontSize="11" fill="#94A3B8" fontWeight="700">2</text>
      <rect x="114" y="188" width="180" height="8" rx="4" fill="#94A3B8" />
      <rect x="114" y="201" width="240" height="6" rx="3" fill="#E2E8F0" />
      <rect x="114" y="211" width="200" height="6" rx="3" fill="#E2E8F0" />

      {/* Result 3 */}
      <rect x="70" y="236" width="340" height="50" rx="12" fill="white" stroke="#E0E7FF" strokeWidth="1.5" />
      <rect x="82" y="248" width="22" height="22" rx="6" fill="#E0E7FF" />
      <text x="88" y="263" fontSize="11" fill="#94A3B8" fontWeight="700">3</text>
      <rect x="114" y="248" width="160" height="8" rx="4" fill="#94A3B8" />
      <rect x="114" y="261" width="220" height="6" rx="3" fill="#E2E8F0" />
      <rect x="114" y="271" width="180" height="6" rx="3" fill="#E2E8F0" />

      {/* Analytics chart - floating top right */}
      <rect x="310" y="108" width="100" height="58" rx="12" fill="#6366F1" />
      {/* Chart bars */}
      <rect x="322" y="140" width="12" height="18" rx="3" fill="white" opacity="0.4" />
      <rect x="338" y="132" width="12" height="26" rx="3" fill="white" opacity="0.6" />
      <rect x="354" y="124" width="12" height="34" rx="3" fill="white" opacity="0.8" />
      <rect x="370" y="118" width="12" height="40" rx="3" fill="white" />
      {/* Chart label */}
      <rect x="322" y="112" width="60" height="8" rx="4" fill="white" opacity="0.5" />

      {/* Keyword tags */}
      <rect x="70" y="296" width="80" height="24" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1" />
      <rect x="76" y="304" width="68" height="8" rx="4" fill="#6366F1" opacity="0.7" />

      <rect x="160" y="296" width="90" height="24" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1" />
      <rect x="166" y="304" width="78" height="8" rx="4" fill="#6366F1" opacity="0.5" />

      <rect x="260" y="296" width="70" height="24" rx="12" fill="#6366F1" />
      <rect x="266" y="304" width="58" height="8" rx="4" fill="white" opacity="0.8" />

      <rect x="340" y="296" width="70" height="24" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1" />
      <rect x="346" y="304" width="58" height="8" rx="4" fill="#6366F1" opacity="0.4" />

      {/* Trending up badge */}
      <rect x="56" y="108" width="10" height="58" rx="5" fill="#ECFDF5" />
      <rect x="56" y="108" width="10" height="20" rx="5" fill="#10B981" />
    </svg>
  );
}
