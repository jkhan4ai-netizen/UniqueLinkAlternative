export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // In a real app, this would send data to Google Analytics, Facebook Pixel, or custom backend.
  console.log(`[Analytics Event]: ${eventName}`, eventData || {});
};
