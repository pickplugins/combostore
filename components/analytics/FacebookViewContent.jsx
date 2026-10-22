// components/analytics/FacebookViewContent.jsx
'use client';
import { useEffect } from 'react';

export default function FacebookViewContent({ eventId, data }) {



    useEffect(() => {


        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', data, { eventID: eventId });
        }
    }, [eventId]);
    return null;
}