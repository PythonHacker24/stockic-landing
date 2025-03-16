import { Button } from '@/src/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Stockic maximizes your Experience with Better News and Premium UI</h2>
                    <div className="space-y-6">
                        <p>Reading news from random sources is an utter waste of time. You are bombarded with information you might never need, consuming your cognative efforts which needs to go in better stuff.</p>
                        <p>
                            Stockic <span className="font-bold">with it's AI capabilities and Powerful UI</span> provides all the insights you need complied into handful of sentences by removing unnecessary details and providing you the option to read full news article only if you want to.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
