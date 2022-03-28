import { getRandomId } from "../helpers";
import { IBaseCartData, ICartData } from "../interface";

const addNewCartItem = (data: IBaseCartData) => {
    if (data) {
        return Promise.resolve({ id: getRandomId(2, 100) }).then(
            (value) => value
        );
    }

    return Promise.reject(new Error("no cart item was sended")).then(
        (error) => {
            throw error;
        }
    );
};

const deleteCartItem = (id: number) => {
    if (id) {
        return Promise.resolve();
    }

    return Promise.reject(new Error("no cart item was deleted")).then(
        (error) => {
            throw error;
        }
    );
};

const updateCartProductQuantity = (id: number) => {
    if (id) {
        return Promise.resolve();
    }

    return Promise.reject(new Error("no cart item was updated")).then(
        (error) => {
            throw error;
        }
    );
};

const getCartData = () => {
    return fetch("./fakeData.json")
        .then((response) => {
            return response.json();
        })
        .then((data: ICartData[]) => {
            return { data: data };
        })
        .catch((e) => {
            throw new Error(e);
        });
};

export {
    addNewCartItem,
    deleteCartItem,
    updateCartProductQuantity,
    getCartData,
};
