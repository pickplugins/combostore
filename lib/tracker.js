import { sendMetaCAPI } from '@/app/actions/meta-capi';

export const trackEvent = async (eventName, data = {}) => {
  // 1. Generate a unique ID so Meta knows these two signals are the same event
  const eventId = crypto.randomUUID();

  // 2. Browser Trigger
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data, { event_id: eventId });
  }

  // 3. Server Trigger (CAPI)
  await sendMetaCAPI(eventName, eventId, data);
};