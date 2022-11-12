import Laptop from "./Laptop";

function HeroSection() {
    return (
        <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
            <div className={`w-full flex-col justify-center align-center relative heroGrow`} style={{ height: "100vh" }}>
                <h1 className="flex justify-center items-end heroText h-1/2">LUCAS</h1>
                <h1 className="flex justify-center items-start heroText h-1/2">PENNICE</h1>
                <Laptop />
            </div>
        </div>
    );
}
export default HeroSection;
