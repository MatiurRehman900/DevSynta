export default function DevOpsIllustration() {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect x="40" y="20" width="400" height="320" rx="20" fill="#EEF2FF" />

      {/* Central pipeline flow */}
      {/* Stage nodes */}
      {/* Code */}
      <rect x="65" y="155" width="70" height="50" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <rect x="72" y="163" width="30" height="6" rx="3" fill="#6366F1" />
      <rect x="72" y="174" width="50" height="4" rx="2" fill="#C7D2FE" />
      <rect x="72" y="182" width="40" height="4" rx="2" fill="#C7D2FE" />
      <rect x="72" y="190" width="45" height="4" rx="2" fill="#C7D2FE" />
      <text x="78" y="215" fontSize="9" fill="#6366F1" fontWeight="600">CODE</text>

      {/* Arrow 1 */}
      <path d="M138 180 L158 180" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M154 176 L160 180 L154 184" fill="#6366F1" />

      {/* Build */}
      <rect x="160" y="155" width="70" height="50" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <circle cx="195" cy="175" r="12" fill="#EEF2FF" />
      <path d="M189 175 L193 179 L201 171" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="168" y="192" width="54" height="4" rx="2" fill="#C7D2FE" />
      <text x="173" y="215" fontSize="9" fill="#6366F1" fontWeight="600">BUILD</text>

      {/* Arrow 2 */}
      <path d="M233 180 L253 180" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M249 176 L255 180 L249 184" fill="#6366F1" />

      {/* Test */}
      <rect x="255" y="155" width="70" height="50" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <circle cx="290" cy="175" r="12" fill="#ECFDF5" />
      <path d="M284 175 L288 179 L296 171" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="263" y="192" width="54" height="4" rx="2" fill="#C7D2FE" />
      <text x="272" y="215" fontSize="9" fill="#6366F1" fontWeight="600">TEST</text>

      {/* Arrow 3 */}
      <path d="M328 180 L348 180" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M344 176 L350 180 L344 184" fill="#6366F1" />

      {/* Deploy */}
      <rect x="350" y="155" width="70" height="50" rx="12" fill="#6366F1" />
      <path d="M385 163 L385 183 M378 170 L385 163 L392 170" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="358" y="188" width="54" height="4" rx="2" fill="white" opacity="0.5" />
      <text x="362" y="215" fontSize="9" fill="#6366F1" fontWeight="600">DEPLOY</text>

      {/* Top section - Cloud infrastructure */}
      {/* Cloud shape */}
      <ellipse cx="240" cy="75" rx="60" ry="28" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <ellipse cx="210" cy="82" rx="30" ry="20" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <ellipse cx="270" cy="82" rx="30" ry="20" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <rect x="180" y="82" width="120" height="20" fill="white" />
      {/* Cloud label */}
      <rect x="210" y="68" width="60" height="18" rx="9" fill="#EEF2FF" />
      <rect x="218" y="73" width="44" height="8" rx="4" fill="#6366F1" />

      {/* Cloud to pipeline arrow */}
      <path d="M240 102 L240 150" stroke="#A5B4FC" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M236 146 L240 152 L244 146" fill="#A5B4FC" />

      {/* Bottom section - Monitoring */}
      <rect x="100" y="240" width="280" height="70" rx="14" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />

      {/* Monitor label */}
      <rect x="116" y="250" width="70" height="8" rx="4" fill="#6366F1" />

      {/* Metrics bars */}
      <rect x="116" y="266" width="240" height="6" rx="3" fill="#EEF2FF" />
      <rect x="116" y="266" width="180" height="6" rx="3" fill="#6366F1" />

      <rect x="116" y="278" width="240" height="6" rx="3" fill="#EEF2FF" />
      <rect x="116" y="278" width="220" height="6" rx="3" fill="#818CF8" />

      <rect x="116" y="290" width="240" height="6" rx="3" fill="#EEF2FF" />
      <rect x="116" y="290" width="140" height="6" rx="3" fill="#A5B4FC" />

      {/* Metric labels */}
      <text x="302" y="273" fontSize="8" fill="#6366F1" fontWeight="600">75%</text>
      <text x="302" y="285" fontSize="8" fill="#818CF8" fontWeight="600">92%</text>
      <text x="302" y="297" fontSize="8" fill="#A5B4FC" fontWeight="600">58%</text>

      {/* Pipeline to monitor arrow */}
      <path d="M240 210 L240 238" stroke="#A5B4FC" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M236 234 L240 240 L244 234" fill="#A5B4FC" />

      {/* Docker container badge */}
      <rect x="50" y="240" width="44" height="44" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <rect x="58" y="252" width="28" height="6" rx="3" fill="#2496ED" opacity="0.7" />
      <rect x="58" y="262" width="28" height="6" rx="3" fill="#2496ED" opacity="0.5" />
      <rect x="58" y="272" width="28" height="6" rx="3" fill="#2496ED" opacity="0.3" />

      {/* Kubernetes badge */}
      <rect x="386" y="240" width="44" height="44" rx="12" fill="white" stroke="#C7D2FE" strokeWidth="1.5" />
      <circle cx="408" cy="262" r="12" fill="#EEF2FF" />
      <path d="M408 252 L411 259 L419 259 L413 264 L415 272 L408 267 L401 272 L403 264 L397 259 L405 259 Z" fill="#326CE5" opacity="0.7" />

      {/* Success badge */}
      <rect x="380" y="130" width="60" height="22" rx="11" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1" />
      <circle cx="393" cy="141" r="5" fill="#10B981" />
      <rect x="402" y="137" width="30" height="8" rx="4" fill="#10B981" />
    </svg>
  );
}
