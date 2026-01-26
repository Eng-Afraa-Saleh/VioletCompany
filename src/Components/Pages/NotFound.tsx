
const NotFound = () => {
    
    return (
        <div className="bg-light-background dark:bg-dark-background py-20 w-full flex items-center justify-center px-4"
            style={{
                background:
                    "radial-gradient(60% 60% at 50% 40%, var(--color-light-background) 0%, var(--color-light-card) 58%, var(--color-light-primary/10) 100%), linear-gradient(180deg, var(--color-light-card) 0%, var(--color-light-background) 100%)",
            }}>
            <div
                className="relative w-full max-w-4xl text-center border border-light-primary/20 bg-light-background/80 backdrop-blur-lg rounded-xl p-8 md:p-12 overflow-hidden"
                style={{ boxShadow: "0 0 60px rgba(59, 130, 246, 0.08)" }}
            >
                <div className="bg-transparent dark:bg-dark-card  absolute inset-0 z-10 flex items-center justify-center select-none">
                    <span
                        className="font-extrabold tracking-tighter leading-none text-[36vw] md:text-[28vw] lg:text-[20vw] text-light-primary/30 dark:text-dark-primary/30 animate-pulse mix-blend-overlay motion-reduce:animate-none"
                        style={{
                            textShadow:
                                "0 0 16px rgba(59, 130, 246, 0.3), 0 0 36px rgba(59, 130, 246, 0.2), 0 0 64px rgba(59, 130, 246, 0.1)",
                        }}
                    >
                        404
                    </span>
                </div>

                <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(60% 60% at 50% 40%, transparent 0%, var(--color-light-background) 80%, transparent 100%)",
                    }}
                />

                <div className="pointer-events-none absolute inset-0 z-40 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjAyIi8+PHBhdGggZD0iTTAgMEw0MCA0ME0xMCAwTDAgMTBNMzAgMEwwIDMwTTQwMTBMNDAgME0wIDQwTDIwIDIwTTQwIDQwTDIwIDIwTTEwIDQwTDMwIDIwTTMwIDQwTDEwIDIwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] bg-repeat"
                />

                <div className="relative z-30 flex flex-col items-center">
                    <h2 className="text-2xl md:text-4xl mb-3 font-semibold leading-[120%] bg-clip-text text-transparent bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent">
                        Page Not Found          </h2>
                    <p className="mt-3 md:mt-4 text-light-text/70 dark:text-dark-text/70 md:text-lg leading-[150%] max-w-2xl">
                        The page you are looking for does not exist or has been moved.          </p>

                     <div
                        className="mt-5 h-[2px] w-24 md:w-32"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent 0%, var(--color-light-primary) 50%, transparent 100%)",
                            boxShadow: "0 0 16px var(--color-light-primary)",
                        }}
                    />

                     <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button  
                            className="px-6 py-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-primary/20 dark:border-dark-primary/20 text-light-text dark:text-dark-text hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Back To Home

                        </button>
                        <button
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-white font-medium  transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            Contact Us
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default NotFound;