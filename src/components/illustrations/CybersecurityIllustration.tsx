export default function CybersecurityIllustration() {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect x="40" y="20" width="400" height="320" rx="20" fill="#EEF2FF" />

      {/* Central shield */}
      <path
        d="M240 55 L310 85 L310 165 C310 210 240 240 240 240 C240 240 170 210 170 165 L170 85 Z"
        fill="white"
        stroke="#C7D2FE"
        strokeWidth="2"
      />
      <path
        d="M240 72 L296 97 L296 162 C296 198 240 222 240 222 C240 222 184 198 184 162 L184 97 Z"
        fill="#EEF2FF"
      />
      {/* Shield inner glow */}
      <path
        d="M240 88 L282 108 L282 158 C282 184 240 202 240 202 C240 202 198 184 198 158 L198 108 Z"
        fill="#6366F1"
        opacity="0.15"
      />
      {/* Lock icon inside shield */}
      <rect x="222" y="138" width="36" height="28" rx="6" fill="#6366F1" />
      <path d="M228 138 L228 130 C228 122 252 122 252 130 L252 138" stroke="#6366F1" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="240" cy="152" r="5" fill="white" />
      <rect x="238" y="152" width="4" height="8" rx="2" fill="white" />

      {/* Checkmark on shield */}
      <circle cx="240" cy="110" r="14" fill="#6366F1" opacity="0.1" />
      <path d="M233 110 L238 115 L247 105" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Orbiting security nodes */}
      {/* Node 1 - top left */}
      <circle cx="120" cy="100" r="28" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <rect x="108" y="90" width="24" height="6" rx="3" fill="#6366F1" />
      <rect x="108" y="100" width="18" height="4" rx="2" fill="#C7D2FE" />
      <rect x="108" y="108" width="20" height="4" rx="2" fill="#C7D2FE" />
      <text x="108" y="122" fontSize="8" fill="#6366F1" fontWeight="700">AUDIT</text>

      {/* Connector line 1 */}
      <path d="M148 100 L168 115" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* Node 2 - top right */}
      <circle cx="360" cy="100" r="28" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <circle cx="360" cy="96" r="10" fill="#EEF2FF" />
      <path d="M354 96 L358 100 L366 92" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="344" y="122" fontSize="8" fill="#6366F1" fontWeight="700">PROTECT</text>

      {/* Connector line 2 */}
      <path d="M332 100 L312 115" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* Node 3 - bottom left */}
      <circle cx="100" cy="260" r="28" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <rect x="88" y="250" width="24" height="18" rx="4" fill="#EEF2FF" />
      <rect x="92" y="254" width="16" height="3" rx="1.5" fill="#6366F1" />
      <rect x="92" y="260" width="12" height="3" rx="1.5" fill="#A5B4FC" />
      <rect x="92" y="266" width="14" height="3" rx="1.5" fill="#A5B4FC" />
      <text x="84" y="282" fontSize="8" fill="#6366F1" fontWeight="700">MONITOR</text>

      {/* Connector line 3 */}
      <path d="M128 248 L168 215" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* Node 4 - bottom right */}
      <circle cx="380" cy="260" r="28" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <path d="M370 260 L375 255 L380 260 L385 255 L390 260" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M370 268 L375 263 L380 268 L385 263 L390 268" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <text x="362" y="282" fontSize="8" fill="#6366F1" fontWeight="700">DETECT</text>

      {/* Connector line 4 */}
      <path d="M352 248 L312 215" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* Floating threat badge - blocked */}
      <rect x="55" y="155" width="80" height="32" rx="10" fill="white" stroke="#FCA5A5" strokeWidth="1.5" />
      <circle cx="72" cy="171" r="8" fill="#FEE2E2" />
      <path d="M68 167 L76 175 M76 167 L68 175" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      <rect x="86" y="165" width="40" height="6" rx="3" fill="#EF4444" opacity="0.7" />
      <rect x="86" y="174" width="30" height="5" rx="2.5" fill="#FCA5A5" />

      {/* Floating compliance badge */}
      <rect x="345" y="155" width="90" height="32" rx="10" fill="white" stroke="#6EE7B7" strokeWidth="1.5" />
      <circle cx="362" cy="171" r="8" fill="#ECFDF5" />
      <path d="M358 171 L361 174 L366 168" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="376" y="165" width="50" height="6" rx="3" fill="#10B981" opacity="0.7" />
      <rect x="376" y="174" width="40" height="5" rx="2.5" fill="#6EE7B7" />

      {/* Encryption dots pattern */}
      {[0,1,2,3,4].map((i) => (
        <circle key={i} cx={200 + i * 10} cy={290} r="2.5" fill="#C7D2FE" opacity={0.4 + i * 0.12} />
      ))}
      {[0,1,2,3,4].map((i) => (
        <circle key={i} cx={255 + i * 10} cy={290} r="2.5" fill="#C7D2FE" opacity={0.4 + i * 0.12} />
      ))}
      <rect x="238" y="284" width="14" height="12" rx="3" fill="#6366F1" opacity="0.3" />
    </svg>
  );
}
