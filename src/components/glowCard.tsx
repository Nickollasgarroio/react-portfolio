import React from "react";
import { Card, CardBody } from "@heroui/card";

export function GlowCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group overflow-visible">
      {/* elemento que gera o glow atrás */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{
          filter: "blur(30px)",
          background:
            "radial-gradient(circle at 50% 40%, rgba(255,0,255,0.45), rgba(255,0,255,0.18) 35%, transparent 60%)",
          zIndex: 0,
        }}
      />
      <Card className="relative z-10 transform transition duration-300 group-hover:scale-105">
        <CardBody className="p-4">{children}</CardBody>
      </Card>
    </div>
  );
}
