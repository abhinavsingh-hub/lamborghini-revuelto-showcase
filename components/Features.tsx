import Image from "next/image";

export default function Features() {
    const features = [
        {
            title: "Carbon Monocoque",
            desc: "Inspired by aeronautics, the monofuselage reduces weight while maximizing torsional stiffness. A masterpiece of composite engineering.",
            img: "/images/feature-carbon.jpg", // Placeholder - expecting user to provide or use generic? Prompt didn't specify extra images. I'll use placeholders or just text blocks if images missing. Prompt says 'Left image Right text'. I'll assume placeholders.
        },
        {
            title: "Hybrid Drive System",
            desc: "Three electric motors work in synergy with the V12. Instant torque vectoring for unparalleled cornering precision.",
            img: "/images/feature-hybrid.jpg",
        },
        {
            title: "Aerodynamic Architecture",
            desc: "Active aerodynamics manage downforce and drag in real-time. Every surface is sculpted for performance.",
            img: "/images/feature-aero.jpg",
        },
    ];

    return (
        <section className="bg-revuelto-black py-20 px-6 md:px-20 space-y-32">
            {features.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    {/* Image Placeholder or Container */}
                    <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 relative overflow-hidden group">
                        {/* Using a gradient placeholder since we don't have these specific images */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-orbitron text-xs tracking-widest uppercase">
                            [Image: {item.title}]
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h3 className="text-3xl md:text-5xl font-orbitron font-bold text-white">
                            {item.title}
                        </h3>
                        <div className="h-0.5 w-16 bg-accent-gold" />
                        <p className="text-lg text-gray-400 font-rajdhani leading-relaxed max-w-lg">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
