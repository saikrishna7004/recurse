"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const InfoCard = ({ props, variants, index }) => {
    return <motion.div className="relative dark:bg-neutral-900 p-6 rounded-lg shadow-lg overflow-hidden group"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{
            once: true,
        }}
        custom={index * 2}
    >
        <div className={`absolute top-[-150%] left-[-50%] h-[300%] w-[300%] bg-gradient-to-r from-${props.color}-600 via-${props.color}-700 to-${props.color}-800 rounded-full transform scale-[0.1] group-hover:scale-100 transition-transform duration-500`}></div>
        <div className="relative z-10">
            <h3 className={`text-3xl font-semibold mb-6 mt-4 text-${props.color}-400 group-hover:text-white transition-colors duration-500`}>{props.title}</h3>
            <hr className="w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400" />
            <p className="dark:text-gray-400 text-gray-700 group-hover:text-white my-4 transition-colors duration-500">
                {props.desc}
            </p>
        </div>
    </motion.div>
}

export default function Home() {
    const fadeVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
                delay: 0.05 * index
            }
        })
    }

    const infoData = [
        { title: 'Vision', desc: 'To cultivate a vibrant coding culture at KMIT by organizing regular coding workshops, hackathons, and collaborative projects that empower students to develop their technical skills.', color: 'pink' },
        { title: 'Mission', desc: 'To build a strong, innovative coding community at KMIT, contributing to impactful projects and establishing the college as a hub of technical excellence and creativity in the coding world.', color: 'blue' },
        { title: 'Values', desc: 'We believe in the power of collaboration and mutual support. Our club fosters an inclusive environment where members help each other grow, pushing the boundaries of what’s possible through teamwork and continuous learning.', color: 'orange' }
    ]

    return (
        <div>
            <main>
                <div className="px-8">
                    {/* First Section */}
                    <section className="lg:px-10 md:px-6 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1193 1963" className="absolute top-0 left-0 w-full h-full z-[-1]">
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
                        <motion.div className="m-auto text-center z-10 h-[80vh] content-center"
                            variants={fadeVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                        >
                            <h1 className="lg:text-9xl md:text-5xl text-4xl font-semibold my-4">RECURSE</h1>
                            <p className="text-lg my-4">The Technical Club of KMIT</p>
                            <Button asChild variant="default" className="px-6 py-3 my-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white">
                                <Link href="https://www.instagram.com/recurse.official" target="_blank">Follow us on Instagram</Link>
                            </Button>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
                            {infoData.map((info, idx) => (
                                <InfoCard key={idx} props={info} variants={fadeVariants} index={idx} />
                            ))}
                        </div>
                    </section>

                    {/* Second Section: Past Events */}
                    <motion.section className="mt-24"
                        variants={fadeVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                    >
                        <h2 className="sticky top-0 text-3xl font-semibold mb-8 dark:bg-neutral-950 bg-white py-8 z-10 lg:px-10 md:px-6 px-4">Past Events</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10 md:px-6 px-4">
                            {Array.from({ length: 8 }).map((_, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={idx}
                                    className="rounded-lg shadow-lg transition-colors duration-500 hover:bg-[#3FA739] hover:dark:bg-[#3FA739] hover:text-white border"
                                >
                                    <Image
                                        src={`https://picsum.photos/seed/event${idx}/500/300`}
                                        alt={`Event ${idx}`}
                                        width={500}
                                        height={300}
                                        className="mb-4"
                                    />
                                    <h3 className="text-3xl font-semibold mb-4 px-6 pt-4 pb-2">
                                        Event {idx + 1}
                                    </h3>
                                    <p className="mx-6 mb-6">
                                        A brief recap of what happened in the event, key highlights, and achievements.
                                    </p>
                                    <Button asChild className="mx-6 mb-8"><Link href={`/events/${idx + 1}`}>Learn More&nbsp;<FaArrowRight /></Link></Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Third Section: Projects Showcase */}
                    <motion.section className="my-24"
                        variants={fadeVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                    >
                        <h2 className="sticky top-0 text-3xl font-semibold mb-8 dark:bg-neutral-950 bg-white py-8 z-10 lg:px-10 md:px-6 px-4">Projects Showcase</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10 md:px-6 px-4">
                            {Array.from({ length: 9 }).map((_, idx) => (
                                <motion.div key={idx} className="p-6 rounded-b-lg shadow-lg border"
                                    variants={fadeVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={idx}
                                >
                                    <Image
                                        src={`https://picsum.photos/seed/project${idx}/500/300`}
                                        alt={`Project ${idx}`}
                                        width={500}
                                        height={300}
                                        className="rounded-lg mb-4"
                                    />
                                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-500">Project {idx + 1}</h3>
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-500">
                                        This is a brief description of the project. It showcases the tech used and the challenges solved.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </main>
        </div>
    );
}
