import { Button } from "@/components/ui/button";
import { faBullseye, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <main>
                <div className="px-8">

                    {/* First Section */}
                    <section className="container mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1193 1963" className="absolute top-0 left-0 w-full h-full">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#00ff00', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#009900', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#00cc00', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#003300', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>

                            {/* Bubbles/Circles with random positions and radii */}
                            <circle className="bubble" cx="40%" cy="50%" r="50" fill="url(#grad2)" />
                            <circle className="bubble" cx="-40%" cy="35%" r="60" fill="url(#grad2)" />
                            <circle className="bubble" cx="120%" cy="15%" r="30" fill="url(#grad1)" />
                            <circle className="bubble" cx="85%" cy="70%" r="45" fill="url(#grad2)" />
                            <circle className="bubble" cx="160%" cy="80%" r="40" fill="url(#grad1)" />
                            <circle className="bubble" cx="160%" cy="40%" r="55" fill="url(#grad2)" />
                            <circle className="bubble" cx="50%" cy="90%" r="30" fill="url(#grad1)" />
                            <circle className="bubble" cx="-60%" cy="80%" r="42" fill="url(#grad2)" />
                            <circle className="bubble" cx="30%" cy="25%" r="33" fill="url(#grad2)" />
                        </svg>
                        <div className="m-auto text-center z-10 h-[80vh] content-center">
                            <h1 className="lg:text-9xl md:text-5xl text-4xl font-semibold my-4">RECURSE</h1>
                            <p className="text-lg my-4">The Technical Club of KMIT</p>
                            <Button asChild variant="default" className="px-6 py-3 my-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white">
                                <Link href="https://www.instagram.com/recurse.official" target="_blank">Follow us on Instagram</Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
                            {/* Card 1 - Vision */}
                            <div className="relative bg-neutral-900 p-6 rounded-lg shadow-lg overflow-hidden group">
                                <div className="absolute top-[-150%] left-[-50%] h-[300%] w-[300%] bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 rounded-full transform scale-[0.1] group-hover:scale-100 transition-transform duration-500"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-semibold mb-6 mt-4 text-green-400 group-hover:text-white w-full">Vision</h3>
                                    <p className="text-gray-400 group-hover:text-white my-4">
                                        To cultivate a vibrant coding culture at KMIT by organizing regular coding workshops, hackathons, and collaborative projects that empower students to develop their technical skills.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 - Mission */}
                            <div className="relative bg-neutral-900 p-6 rounded-lg shadow-lg overflow-hidden group">
                                <div className="absolute top-[-150%] left-[-50%] h-[300%] w-[300%] bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-full transform scale-[0.1] group-hover:scale-100 transition-transform duration-500"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-semibold mb-6 mt-4 text-green-400 group-hover:text-white">Mission</h3>
                                    <p className="text-gray-400 group-hover:text-white my-4">
                                        To build a strong, innovative coding community at KMIT, contributing to impactful projects and establishing the college as a hub of technical excellence and creativity in the coding world.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 - Values */}
                            <div className="relative bg-neutral-900 p-6 rounded-lg shadow-lg overflow-hidden group">
                                <div className="absolute top-[-150%] left-[-50%] h-[300%] w-[300%] bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 rounded-full transform scale-[0.1] group-hover:scale-100 transition-transform duration-500"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-semibold mb-6 mt-4 text-green-400 group-hover:text-white">Values</h3>
                                    <p className="text-gray-400 group-hover:text-white my-4">
                                        We believe in the power of collaboration and mutual support. Our club fosters an inclusive environment where members help each other grow, pushing the boundaries of what’s possible through teamwork and continuous learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Second Section: Past Events */}
                    <section className="mt-24 container mx-auto">
                        <h2 className="text-3xl font-semibold mb-8 sticky top-0 bg-neutral-950 py-8 z-10">Past Events</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 8 }).map((_, idx) => (
                                <div key={idx} className="bg-neutral-900 p-6 rounded-lg shadow-lg">
                                    <Image
                                        src={`https://picsum.photos/seed/event${idx}/500/300`}
                                        alt={`Event ${idx}`}
                                        width={500}
                                        height={300}
                                        className="rounded-lg mb-4"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Event {idx + 1}</h3>
                                    <p className="text-gray-400">
                                        A brief recap of what happened in the event, key highlights, and achievements.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Third Section: Projects Showcase */}
                    <section className="my-24 container mx-auto">
                        <h2 className="text-3xl font-semibold mb-8 sticky top-0 bg-neutral-950 py-8 z-10">Projects Showcase</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 9 }).map((_, idx) => (
                                <div key={idx} className="bg-neutral-900 p-6 rounded-lg shadow-lg">
                                    <Image
                                        src={`https://picsum.photos/seed/project${idx}/500/300`}
                                        alt={`Project ${idx}`}
                                        width={500}
                                        height={300}
                                        className="rounded-lg mb-4"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Project {idx + 1}</h3>
                                    <p className="text-gray-400">
                                        This is a brief description of the project. It showcases the tech used and the challenges solved.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
