/**
 * Get TikTok Pixel instance
 */
export function getTikTok() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.ttq || null;
}


/**
 * Send event to browser TikTok Pixel
 */
export function trackTikTokBrowser(
  event,
  properties = {},
  eventId = null
) {
  const ttq = getTikTok();

  if (!ttq) {
    console.warn('TikTok Pixel is not available');
    return;
  }

  const data = {
    ...properties,
  };

  if (eventId) {
    data.event_id = eventId;
  }

  ttq.track(event, data);
}


/**
 * Send event to our Next.js server
 */
export async function trackTikTokServer(
  event,
  properties = {},
  eventId = null,
  context = {}
) {
  try {
    const response = await fetch('/api/tiktok/events', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        event,
        event_id: eventId,
        properties,
        context,
      }),
    });

    return await response.json();

  } catch (error) {
    console.error(
      'TikTok server tracking error:',
      error
    );

    return null;
  }
}


/**
 * Send the same event through
 * both Browser Pixel + Server Events API
 */
export async function trackTikTokEvent(
  event,
  properties = {},
  context = {}
) {
  const eventId = crypto.randomUUID();

  // 1. Browser event
  trackTikTokBrowser(
    event,
    properties,
    eventId
  );

  // 2. Server event
  await trackTikTokServer(
    event,
    properties,
    eventId,
    context
  );

  return eventId;
}