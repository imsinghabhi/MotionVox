"use client";

import React, { createContext, useContext, useState } from "react";
import { DemoModal } from "@/components/demo-modal";

interface DemoContextType {
  isDemoOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
}

const DemoContext = createContext<DemoContextType>({
  isDemoOpen: false,
  openDemo: () => {},
  closeDemo: () => {},
});

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <DemoContext.Provider value={{ isDemoOpen, openDemo, closeDemo }}>
      {children}
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </DemoContext.Provider>
  );
}

export function useDemoModal() {
  return useContext(DemoContext);
}
