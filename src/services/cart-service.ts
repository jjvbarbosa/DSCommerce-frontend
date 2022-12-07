import { OrderDTO } from "../models/order";
import * as cartRepository from '../localStorage/cart-repository';

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepository.get();
}