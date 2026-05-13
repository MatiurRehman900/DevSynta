import { Suspense } from "react";
import { PortfolioContent } from "./PortfolioClient";

export default function PortfolioPage() {
  return (
    <Suspense fallback={null}>
      <PortfolioContent />
    </Suspense>
  );
}
