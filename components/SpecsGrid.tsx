export default function SpecsGrid() {
    return (
        <section className="bg-revuelto-black py-20 px-6 md:px-20 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {/* Metric 1 */}
                <div className="border-l border-white/10 pl-6 group">
                    <h3 className="text-sm text-gray-400 font-rajdhani uppercase tracking-widest mb-2">Acceleration</h3>
                    <p className="text-6xl md:text-8xl font-orbitron font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                        2.5<span className="text-2xl ml-2">s</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">0–100 km/h</p>
                </div>

                {/* Metric 2 */}
                <div className="border-l border-white/10 pl-6 group">
                    <h3 className="text-sm text-gray-400 font-rajdhani uppercase tracking-widest mb-2">Top Speed</h3>
                    <p className="text-6xl md:text-8xl font-orbitron font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                        350<span className="text-2xl ml-2">+</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">km/h</p>
                </div>

                {/* Metric 3 */}
                <div className="border-l border-white/10 pl-6 group">
                    <h3 className="text-sm text-gray-400 font-rajdhani uppercase tracking-widest mb-2">Torque</h3>
                    <p className="text-6xl md:text-8xl font-orbitron font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                        725<span className="text-2xl ml-2">Nm</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">@6750 rpm</p>
                </div>
            </div>
        </section>
    );
}
