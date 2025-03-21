"use client";
import React, { useState, memo } from 'react';
import { Mail, SendHorizontal, ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';
import { HeroHeader } from '@/src/components/hero5-header';
import Image from 'next/image';
import Link from 'next/link';

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

// Separate email form component to prevent re-renders of parent
const EmailForm = memo(function EmailForm() {
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const response = await fetch("https://api.getwaitlist.com/api/v1/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    waitlist_id: 23342,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage("Successfully joined the waitlist!");
            } else {
                setMessage(result.message || "Failed to join the waitlist.");
            }
        } catch (error) {
            setMessage("Error submitting form. Please try again.");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                <input
                    placeholder="Your Email address"
                    className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <div className="md:pr-1.5 lg:pr-0">
                    <Button
                        aria-label="submit"
                        size="sm"
                        className="rounded-(--radius)"
                        type="submit"
                        disabled={loading}>
                        {loading ? "Submitting..." : (
                            <>
                                <span className="hidden md:block">Join Waitlist</span>
                                <SendHorizontal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                            </>
                        )}
                    </Button>
                </div>
            </div>
            {message && <p className="mt-2 text-center text-sm text-gray-600">{message}</p>}
        </form>
    );
});

// Memoize the content components that don't need to re-render
const HeroContent = memo(function HeroContent() {
    return (
        <div className="relative z-10 mx-auto max-w-4xl text-center">
            <AnimatedGroup variants={transitionVariants}>
                <Link
                    href="https://docs.stockic.in"
                    target="_blank"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground text-sm">Introducing Stockic API for Developers</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                            <span className="flex size-6">
                                <ArrowRight className="m-auto size-3" />
                            </span>
                            <span className="flex size-6">
                                <ArrowRight className="m-auto size-3" />
                            </span>
                        </div>
                    </div>
                </Link>
            </AnimatedGroup>
            <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance mt-8 text-4xl font-medium sm:text-5xl md:text-6xl">
                Unbiased Summarized News for Produtive Professionals  
            </TextEffect>
            <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-12 max-w-2xl text-pretty text-lg">
                Stockic provides summarized news insights without interfering with the content and saves your time from information overload
            </TextEffect>

            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                staggerChildren: 0.05,
                                delayChildren: 0.75,
                            },
                        },
                    },
                    ...transitionVariants,
                }}
                className="mt-12">
                <EmailForm />
            </AnimatedGroup>
            <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-5 max-w-2xl text-pretty text-xs">
                Join the waitlist and get 3 months of Premium Subscription for free! 
            </TextEffect>
        </div>
    );
});

const HeroImage = memo(function HeroImage() {
    return (
        <div className="mx-auto md:-mt-20 lg:-mt-40">
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                staggerChildren: 0.05,
                                delayChildren: 0.75,
                            },
                        },
                    },
                    ...transitionVariants,
                }}>
                <div className="-rotate-15 aspect-3/2 relative mx-auto lg:w-2/3">
                    <div className="bg-linear-to-b to-background from-background absolute inset-0 via-transparent"></div>
                    <div className="bg-linear-to-l to-background from-background absolute inset-0 via-transparent"></div>
                    <Image
                        src="/stockic-landing-page.png"
                        alt="Phone Background"
                        width="6009"
                        height="4006"
                    />
                </div>
            </AnimatedGroup>
        </div>
    );
});

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate z-10 hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
                        <HeroContent />
                        <HeroImage />
                    </div>
                </section>
            </main>
        </>
    );
}
