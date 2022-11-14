import { motion as m } from "framer-motion";

function Laptop() {
    return (
        <m.section
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute w-full h-full -top-7 left-0 flex justify-center items-center">
            <div className="laptopContainer">LAPTOP</div>
        </m.section>
    );
}
export default Laptop;
