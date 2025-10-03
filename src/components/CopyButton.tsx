import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  contractAddress?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ 
  contractAddress = "...." 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 border-2 border-green-400 hover:border-green-300"
    >
      <span className="text-sm font-mono">
        {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
      </span>
      {copied ? (
        <Check className="w-5 h-5 text-green-700" />
      ) : (
        <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
      )}
      <span className="hidden sm:inline">
        {copied ? 'Copied!' : 'Copy CA'}
      </span>
    </button>
  );
};

export default CopyButton;