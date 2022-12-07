import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from '../localStorage/cart-repository';
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepository.get();
}

export function addProduct(product: ProductDTO) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === product.id);
    if (!item) {
        cart.items.push(
            new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl)
        );
        cartRepository.save(cart);
    }
}