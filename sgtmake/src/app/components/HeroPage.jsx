import Link from "next/link";

export default function HeroPage() {
    return (
        <div className="h-screen w-full p-5">
            {/* Hero Section with Background Image */}
            <div className="relative h-full rounded-xl bg-[url('/back.png')] bg-cover bg-center">

                {/* Gradient Overlay for Better Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rounded-lg"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex items-center justify-center md:justify-start p-6 md:p-10">
                    <div className="text-white text-center md:text-left max-w-2xl">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Prototype to Bulk Manufacturing
                        </h1>
                        <p className="mt-4 text-base md:text-lg">
                            Gain a competitive advantage with our high-quality, cost-effective manufacturing
                            solutions that deliver exceptional value and exceed expectations.
                        </p>
                        <div className="mt-4">
                        <Link href="/" className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg">
                            Get a Quote Now
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
