"use client";

import * as React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export function Navbar() {
    return (
        <header className="shadow-md py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image className="hidden dark:block" src="/recurse-logo-white.png" alt="Recurse Logo" width={150} height={150} />
                    <Image className="dark:hidden block" src="/recurse-logo-black.png" alt="Recurse Logo" width={150} height={150} />
                </Link>

                {/* Navigation Menu */}
                <NavigationMenu>
                    <NavigationMenuList className="flex space-x-6">
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4">
                                    <ListItem href="/events" title="All Events">
                                        Explore all our technical and non-technical events.
                                    </ListItem>
                                    <ListItem href="/events/hackathon" title="Hackathons">
                                        Participate in exciting coding competitions.
                                    </ListItem>
                                    <ListItem href="/events/workshop" title="Workshops">
                                        Hands-on learning sessions to upskill yourself.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4">
                                    <ListItem href="/projects" title="Our Projects">
                                        Discover innovative projects by our members.
                                    </ListItem>
                                    <ListItem href="/projects/open-source" title="Open Source">
                                        Contribute to open-source projects and get involved.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/members" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Members
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef(({ title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
                >
                    <div className="text-sm font-medium">{title}</div>
                    <p className="line-clamp-2 text-sm text-neutral-400">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";
