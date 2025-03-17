export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Stockic AI Metrics for Maximum Value Per Article</h2>
                    <p>Stockic keeps its AI updated with the latest Open Source Models out there to provide better news summarization without bias</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">0.30</div>
                        <p>ROGUE-L Score</p>
                        <p>0.7 more than Inshorts</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">13.17</div>
                        <p>Gunning Fog Score</p>
                        <p>0.6 more than Inshorts</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">12.50</div>
                        <p>Automated Readability Index (ARI)</p>
                        <p>0.11 more than Inshorts</p>
                    </div>
                </div>

                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <p className="text-4xl font-medium lg:text-xs">*Tested on an automated testbench with a dataset of 30 random news articles summarized by Inshorts and Stockic AI</p>
                </div>
            </div>
        </section>
    )
}
