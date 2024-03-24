import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import Sidebar from "../components/Sidebar";
import Summary from "../components/Summary";
import useKiosk from "../hooks/useKiosk";
import ModalProduct from "../components/ModalProduct";

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export default function Layout() {
    const { modal, handleClickModal } = useKiosk();

    return (
        <>
            <div className="md:flex">
                <Sidebar />
                <main className="flex-1 h-screen overflow-y-scroll bg-ghost-white p-3">
                    <Outlet />
                </main>
                <Summary />
            </div>

            <Modal isOpen={modal} style={customStyles}>
                <ModalProduct />
            </Modal>
        </>
    );
}
