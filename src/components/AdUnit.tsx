import { memo } from 'react';
import { motion } from 'framer-motion';
import { useAdsense } from '../hooks/useAdsense';

interface AdUnitProps {
  client: string;
  slot: string;
  layout?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

function AdUnit({
  client,
  slot,
  layout = 'in-article',
  format = 'fluid',
  className = ''
}: AdUnitProps) {
  const adRef = useAdsense({
    client,
    slot,
    layout,
    format,
    responsive: true
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-[100px] ${className}`}
    >
      <div 
        ref={adRef}
        className="w-full h-full"
        aria-label="Advertisement"
        style={{ minHeight: '280px' }}
      />
    </motion.div>
  );
}

// Prevent unnecessary re-renders
export default memo(AdUnit);