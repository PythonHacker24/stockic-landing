export default function StatsSectionTime() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Stockic Saves Your Time</h2>
                    <p>Considering it takes you to read 5 minutes per full article and 30 seconds to read 100 words summary</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">4.5 Mins</div>
                        <p>Saved Per Article</p>
                        <p>Like getting coffee without waiting in line</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">22.5 Hours</div>
                        <p>Saved Per Month</p>
                        <p>Like gaining an extra weekend to relax</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">11 Days</div>
                        <p>Saved Per Year</p>
                        <p>Like extra bonus vacations every year</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
