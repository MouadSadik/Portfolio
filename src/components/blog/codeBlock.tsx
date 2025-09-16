"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-800 text-gray-100 text-sm px-2 py-1 rounded hover:bg-gray-700"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers
        wrapLongLines
        className="rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
