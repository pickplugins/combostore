export function trackFacebookEvent(
  eventName,
  data = {},
  eventId
) {
  if (
    typeof window === 'undefined' ||
    typeof window.fbq !== 'function'
  ) {
    return;
  }

  console.log("##trackFacebookEvent#");
  console.log(eventId);
  console.log(data);


  window.fbq(
    'track',
    eventName,
    data,
    {
      eventID: eventId,
    }
  );
}