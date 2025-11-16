"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "./SchematicWrapped";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const publishableKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY || "";

  return <ClerkProvider>
    <SchematicProvider publishableKey={publishableKey}>
      <SchematicWrapped>{children}</SchematicWrapped></SchematicProvider>
    </ClerkProvider>;
  
}
