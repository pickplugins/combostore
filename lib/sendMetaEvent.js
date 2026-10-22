
export async function sendMetaEvent(prams) {


  var value = prams?.value || 0;
  var currency = prams?.currency || "BDT";
  var event_name = prams?.event_name || "BDT";
  var url = prams?.url || "";
  var content_name = prams?.content_name || "";
  var eventId = prams?.eventId || window.crypto.randomUUID();
  var test_event_code = prams?.test_event_code;





  console.log("Browser Pixel Event");

  // 1️⃣ Browser Pixel Event
  if (window.fbq) {
    window.fbq("trackCustom", event_name, {
      value: value,
      currency: currency,
      content_name: content_name,

    },
      {
        eventID: eventId,
      }
    );
  }

  console.log("Server-Side Event");


  // 2️⃣ Server-Side Event
  await fetch("/api/meta-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        data: [{
          event_name: event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: window.location.href,
          user_data: {
            em: "",
            ph: "",
            client_ip_address: "1.1.1.1",
            client_user_agent: navigator.userAgent
          },
          event_id: eventId,
          value: value,
          custom_data: {
            currency: currency,
            value: value
          }
        }],
        test_event_code: test_event_code

      }

    ),
  });
}
