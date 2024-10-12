const getEventData = (id) => {
    const events = {
        '1': {
            title: 'Tech Hackathon 2023',
            description: `
                The Tech Hackathon 2023 was an exciting event held from October 20 to 22 at the Tech Campus in City Park. 
                This year, we welcomed developers, designers, and tech enthusiasts who collaborated to tackle real-world challenges.

                Participants faced various hackathon challenges, including:
                <ul class="list-disc pl-5">
                    <li><strong>Challenge 1:</strong> Building a sustainable app to help reduce carbon footprints.</li>
                    <li><strong>Challenge 2:</strong> Creating an AI-driven tool to assist remote workers.</li>
                    <li><strong>Challenge 3:</strong> Developing innovative solutions to enhance mental health in the tech industry.</li>
                </ul>

                The competition was fierce, with teams vying for impressive prizes:
                <ul class="list-disc pl-5">
                    <li>1st Place: $5,000</li>
                    <li>2nd Place: $3,000</li>
                    <li>3rd Place: $1,000</li>
                </ul>

                Participants had the chance to showcase their projects, and it was inspiring to see such creativity and passion in action. 
                For those who missed it, detailed information can be found on our <a href="https://example.com/hackathon" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">official website</a>.
            `,
            date: '2023-10-22',
            location: 'Tech Campus, City Park',
            image: 'https://picsum.photos/800/400?random=1', // Horizontal placeholder image
        },
        '2': {
            title: 'AI Innovations Conference',
            description: `
                The AI Innovations Conference took place on November 5-6, 2023, at the Innovation Center in Downtown. 
                This event gathered thought leaders and practitioners to discuss the latest advancements in artificial intelligence.

                The conference featured renowned keynote speakers:
                <ul class="list-disc pl-5">
                    <li><strong>Dr. Jane Smith:</strong> AI Ethics and the importance of responsible AI development.</li>
                    <li><strong>Mr. John Doe:</strong> The future of AI in business and its potential impacts.</li>
                </ul>

                Attendees participated in various workshops and discussions that fostered collaboration and knowledge sharing. 
                For those interested in the details of the conference, check out our <a href="https://example.com/register" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">registration page</a>.
            `,
            date: '2023-11-06',
            location: 'Innovation Center, Downtown',
            image: 'https://picsum.photos/800/400?random=2', // Horizontal placeholder image
        },
    };
    return events[id] || null;
};

const EventPage = ({ params }) => {
    const { id } = params;

    const event = getEventData(id);

    if (!event) {
        return <div className="text-center mt-10">Event not found.</div>;
    }

    return (
        <div className="container mx-auto p-6 max-w-[800px] rounded-lg shadow-lg text-lg">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{event.title}</h1>
            <img src={event.image} alt={event.title} className="w-full h-auto rounded-lg mb-4" />
            <div className="text-gray-700 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: event.description }} />
            <p className="text-gray-600 dark:text-gray-300 mt-2"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Location:</strong> {event.location}</p>
        </div>
    );
};

export default EventPage;
