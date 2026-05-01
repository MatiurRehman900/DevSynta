export default function WebDevIllustration() {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background card */}
      <rect x="40" y="30" width="400" height="300" rx="20" fill="#EEF2FF" />

      {/* Browser window */}
      <rect x="70" y="55" width="340" height="220" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />

      {/* Browser top bar */}
      <rect x="70" y="55" width="340" height="36" rx="12" fill="#E0E7FF" />
      <rect x="70" y="79" width="340" height="12" fill="#E0E7FF" />

      {/* Traffic lights */}
      <circle cx="96" cy="73" r="6" fill="#FCA5A5" />
      <circle cx="114" cy="73" r="6" fill="#FCD34D" />
      <circle cx="132" cy="73" r="6" fill="#6EE7B7" />

      {/* URL bar */}
      <rect x="150" y="64" width="200" height="18" rx="9" fill="white" />
      <circle cx="165" cy="73" r="4" fill="#A5B4FC" />
      <rect x="174" y="70" width="100" height="6" rx="3" fill="#C7D2FE" />

      {/* Browser content area */}
      {/* Nav bar inside browser */}
      <rect x="82" y="103" width="316" height="28" rx="6" fill="#F5F3FF" />
      <rect x="94" y="112" width="40" height="10" rx="5" fill="#6366F1" />
      <rect x="144" y="112" width="30" height="10" rx="5" fill="#C7D2FE" />
      <rect x="184" y="112" width="30" height="10" rx="5" fill="#C7D2FE" />
      <rect x="224" y="112" width="30" height="10" rx="5" fill="#C7D2FE" />
      <rect x="348" y="110" width="38" height="14" rx="7" fill="#6366F1" />

      {/* Hero section inside browser */}
      <rect x="82" y="141" width="190" height="80" rx="8" fill="#EEF2FF" />
      <rect x="94" y="153" width="120" height="12" rx="6" fill="#6366F1" />
      <rect x="94" y="171" width="160" height="8" rx="4" fill="#C7D2FE" />
      <rect x="94" y="184" width="140" height="8" rx="4" fill="#C7D2FE" />
      <rect x="94" y="200" width="60" height="14" rx="7" fill="#6366F1" />

      {/* Image placeholder inside browser */}
      <rect x="284" y="141" width="114" height="80" rx="8" fill="#E0E7FF" />
      <circle cx="341" cy="168" r="18" fill="#C7D2FE" />
      <path d="M323 195 Q341 178 359 195" stroke="#A5B4FC" strokeWidth="2" fill="none" />

      {/* Cards row inside browser */}
      <rect x="82" y="233" width="90" height="32" rx="6" fill="#F5F3FF" stroke="#E0E7FF" strokeWidth="1" />
      <rect x="183" y="233" width="90" height="32" rx="6" fill="#F5F3FF" stroke="#E0E7FF" strokeWidth="1" />
      <rect x="284" y="233" width="114" height="32" rx="6" fill="#F5F3FF" stroke="#E0E7FF" strokeWidth="1" />
      <rect x="92" y="241" width="50" height="6" rx="3" fill="#A5B4FC" />
      <rect x="92" y="251" width="65" height="5" rx="2.5" fill="#C7D2FE" />
      <rect x="193" y="241" width="50" height="6" rx="3" fill="#A5B4FC" />
      <rect x="193" y="251" width="65" height="5" rx="2.5" fill="#C7D2FE" />
      <rect x="294" y="241" width="50" height="6" rx="3" fill="#A5B4FC" />
      <rect x="294" y="251" width="80" height="5" rx="2.5" fill="#C7D2FE" />

      {/* Floating code snippet */}
      <rect x="290" y="270" width="150" height="50" rx="10" fill="#1E1B4B" />
      <rect x="302" y="282" width="60" height="6" rx="3" fill="#818CF8" />
      <rect x="302" y="294" width="40" height="6" rx="3" fill="#6EE7B7" />
      <rect x="348" y="294" width="30" height="6" rx="3" fill="#FCA5A5" />
      <rect x="302" y="306" width="80" height="6" rx="3" fill="#C7D2FE" />

      {/* Floating badge - React */}
      <rect x="50" y="270" width="80" height="32" rx="16" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <circle cx="70" cy="286" r="8" fill="#61DAFB" opacity="0.3" />
      <circle cx="70" cy="286" r="4" fill="#61DAFB" />
      <rect x="84" y="282" width="36" height="8" rx="4" fill="#6366F1" />

      {/* Floating badge - Next.js */}
      <rect x="50" y="310" width="90" height="32" rx="16" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <rect x="64" y="322" width="12" height="12" rx="3" fill="#0F172A" />
      <rect x="82" y="326" width="44" height="8" rx="4" fill="#6366F1" />

      {/* Cursor */}
      <path d="M248 158 L248 178 L253 173 L257 182 L260 181 L256 172 L263 172 Z" fill="#6366F1" />
    </svg>
  );
}
