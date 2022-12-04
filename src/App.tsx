import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Cart from "./routes/ClientHome/Cart";
import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/ProductDetails";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ClientHome />}>
                    <Route index element={<Catalog />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="product-details/:productId" element={<ProductDetails />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}