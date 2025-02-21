

export default function GlobalDelivery() {
    return (
        <section className="flex items-center justify-center p-7 md:p-10">
            <div className="bg-[#18191A] text-white p-12 rounded-2xl md:max-w-5xl w-full text-center hover:scale-105 transition cursor-pointer">
                <h2 className="text-4xl md:text-6xl text-center font-medium mb-4 p-3">Your Orders, Delivered Globally</h2>
                <p className="text-gray-300 mb-8 text-sm text-center">
                    We offer reliable delivery services to customers in over 200 countries, facilitated by our network of trusted agents.
                </p>
                <button className="bg-orange-500 text-white px-3 py-1 md:px-6 md:py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
                    Explore Destinations
                </button>
            </div>
        </section>
    );
}