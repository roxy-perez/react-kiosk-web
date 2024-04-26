import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import Summary from "../components/Summary";
import ModalProduct from "../components/ModalProduct";
import useKiosk from "../hooks/useKiosk";
import { useAuth } from "../hooks/useAuth";

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        border: "2px solid #6b7280",
        borderRadius: "10px",
        overflow: 'hidden',
    },
};

export default function Layout() {
    const { user, error } = useAuth({ middleware: 'auth' });
    const { modal } = useKiosk();

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
            <ToastContainer />
        </>
    );
}
