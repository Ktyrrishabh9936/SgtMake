import ServiceCard from "./ServiceCard"

export default function Services() {
    const data = [
        {
            imgSrc: "/threed.png",
            title: "3D Designing",
            description: "At SGTMake we provide designing solutions in CAD, any rough sketch or part, any drawing, or reverse engineering possible with our designing experts."
        },
        {
            imgSrc: "/printing.png",
            title: "3D Printing",
            description: "We create custom 3D-printed parts in plastic or metal, utilising various technologies to meet your design needs."
        },
        {
            imgSrc: "/maching.png",
            title: "CNC Machining",
            description: "SGTMake produces precision-machined components from various materials, manufactured to your exact specifications."
        },
        {
            imgSrc: "/cutting.png",
            title: "Laser Cutting",
            description: "We offer precise laser cutting of various materials, delivering clean and accurate cuts for your projects."
        },
        {
            imgSrc: "/battery.png",
            title: "Battery Packs",
            description: "SGTMake designs and assembles custom battery packs tailored to your specific power requirements for EVs, solar setups, and more."
        },
        {
            imgSrc: "/wiring.png",
            title: "Wrining Harnesses",
            description: "We build custom wiring harnesses for automotive, EV, and other applications, ensuring reliable electrical connections and power distribution."
        }
    ]
    return (
        <>
            <div className="mt-6">
                <h1 className="text-center text-4xl font-bold mb-6">Discover Our Services</h1>

                <div className="m-3 md:m-2 mt-3 flex flex-wrap justify-center gap-6">
                    {data.map((item, index) => (
                        <ServiceCard
                            key={index}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

            </div>

        </>
    )
}