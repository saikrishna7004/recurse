import Link from 'next/link';
import { Button } from '@/components/ui/button';

const EventsPage = () => {
    return (
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((eventId) => (
                    <div key={eventId} className="p-4 border rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">Event {eventId}</h2>
                        <p className="mb-4">Description of event {eventId}.</p>
                        <Button asChild><Link href={`/events/${eventId}`}>View Event</Link></Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;