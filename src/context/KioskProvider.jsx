import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../config/axios";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalOrder = order.reduce(
      (total, product) => total + product.price * product.amount,
      0
    );
    setTotal(totalOrder);
  }, [order]);

  const getCategories = async () => {
    try {
      const { data } = await axiosInstance("/categories");
      setCategories(data.data);
      setSelectedCategory(data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id)[0];
    setSelectedCategory(category);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleAddOrder = ({ category_id, ...product }) => {
    if (order.some((orderState) => orderState.id === product.id)) {
      const orderUpdated = order.map((orderState) =>
        orderState.id === product.id ? product : orderState
      );
      setOrder(orderUpdated);
      toast.info("Pedido actualizado");
    } else {
      setOrder([...order, product]);
      toast.success("Producto agregado al pedido");
    }
  };

  const handelEditAmount = (id) => {
    const productUpdated = order.filter((product) => product.id === id)[0];
    setProduct(productUpdated);
    setModal(!modal);
  };

  const handleDeleteOrderProduct = (id) => {
    const orderUpdated = order.filter((product) => product.id !== id);
    setOrder(orderUpdated);
    toast.error("Producto eliminado del pedido");
  };

  const handleSubmitNewOrder = async (logout) => {
    const token = localStorage.getItem("AUTH_TOKEN");
    try {
      const { data } = await axiosInstance.post("/orders",
        {
          total,
          products: order.map((product) => {
            return {
              id: product.id,
              amount: product.amount,
            };
          }),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(data.message);
      setTimeout(() => {
        setOrder([]);
      }, 1000);
      setTimeout(() => {
        localStorage.removeItem("AUTH_TOKEN");
        logout();
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KioskContext.Provider
      value={{
        categories,
        selectedCategory,
        handleClickCategory,
        modal,
        handleClickModal,
        product,
        handleSetProduct,
        order,
        handleAddOrder,
        handelEditAmount,
        handleDeleteOrderProduct,
        total,
        handleSubmitNewOrder,
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };
export default KioskContext;
