import { useEffect, useRef } from 'react';

interface UseAdsenseProps {
  client: string;
  slot: string;
  layout?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
}

export function useAdsense({
  client,
  slot,
  layout = 'in-article',
  format = 'fluid',
  responsive = true
}: UseAdsenseProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!client || !slot) return;

    const initAd = () => {
      if (!adRef.current || initialized.current) return;

      try {
        const adElement = document.createElement('ins');
        adElement.className = 'adsbygoogle';
        adElement.style.display = 'block';
        adElement.style.textAlign = 'center';
        
        adElement.dataset.adClient = client;
        adElement.dataset.adSlot = slot;
        adElement.dataset.adLayout = layout;
        adElement.dataset.adFormat = format;
        
        if (responsive) {
          adElement.dataset.fullWidthResponsive = 'true';
        }

        // Clean up existing content
        adRef.current.innerHTML = '';
        adRef.current.appendChild(adElement);

        if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
          (window as any).adsbygoogle.push({});
          initialized.current = true;
        }
      } catch (error) {
        console.error('AdSense initialization error:', error);
      }
    };

    // Initialize after AdSense script loads
    if (document.readyState === 'complete') {
      initAd();
    } else {
      window.addEventListener('load', initAd);
      return () => window.removeEventListener('load', initAd);
    }

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = '';
        initialized.current = false;
      }
    };
  }, [client, slot, layout, format, responsive]);

  return adRef;
}