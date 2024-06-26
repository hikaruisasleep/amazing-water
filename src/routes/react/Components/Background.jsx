export default function Background({ bgUrl, ...props }) {
    let lines = [];
    [...Array(125)].forEach((_, i) => {
        lines.push(
            <div
                className="h-[0.1rem] w-full bg-[#65adff] mb-[0.9rem]"
                key={i}
            ></div>
        );
    });
    return (
        <>
            <svg width="0" height="0">
                <filter id="turb" x="0%" y="0%" height="100%" width="100%">
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="0.0025"
                        numOctaves="5"
                    />
                    <feDisplacementMap
                        in2="turbulence"
                        in="SourceGraphic"
                        scale="150"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>
            <div
                id="background"
                className="fixed h-screen max-h-full w-screen max-w-full flex flex-col justify-center items-center overflow-clip scale-110"
                style={{ filter: "url(#turb) blur(4px)" }}
            >
                <div className="h-[800px] w-[8000px] rotate-45 animate-right-pan">
                    {lines}
                </div>
            </div>
        </>
    );
}
