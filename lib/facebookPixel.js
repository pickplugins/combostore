export function trackFacebookEvent(
  eventName,
  data = {},
  eventId = null
) {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.fbq !== 'function') {
    return;
  }

  const id = eventId || crypto.randomUUID();

  window.fbq(
    'track',
    eventName,
    data,
    {
      eventID: id,
    }
  );

  return id;
}