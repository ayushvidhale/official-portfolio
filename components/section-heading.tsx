import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-xl font-medium capitalize mb-8 text-start">
      {children}
    </h2>
  );
}
