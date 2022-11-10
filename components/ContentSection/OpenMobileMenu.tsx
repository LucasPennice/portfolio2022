import { motion as m, PanInfo } from "framer-motion";

function OpenMobileMenu({ openMenu, closeMenu }: { openMenu: () => void; closeMenu: () => void }) {
    const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const { x, y } = info.offset;
        const { x: Vx, y: Vy } = info.velocity;
        const speed = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy, 2));

        if (x > 100 && y < -100 && speed > 700) return openMenu();
        if (x < -100 && y > 100 && speed > 700) return closeMenu();
    };
    return (
        <m.div
            drag
            dragSnapToOrigin
            dragConstraints={{ right: 0, top: 0, left: 0, bottom: 0 }}
            whileDrag={{ scale: 0.6, boxShadow: "none" }}
            className="sticky w-14 h-14 rounded-full m-3 justify-center items-center shadow-2xl shadow-gray-600 bg-white flex xl:hidden"
            dragMomentum={false}
            style={{ top: "100%" }}
            onDrag={handleDrag}>
            drag
        </m.div>
    );
}
export default OpenMobileMenu;
