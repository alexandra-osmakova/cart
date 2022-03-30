import { useCallback, useEffect, useState } from "react";

interface IUseProductDialog {
    productName: string;
    productPrice: number;
    productQuantity: number;
    isFormValid: boolean;
    onProductNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onProductPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onProductQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useProductDialog = (): IUseProductDialog => {
    const [productName, setProductName] = useState<string>("");
    const [productPrice, setProductPrice] = useState<number>(0);
    const [productQuantity, setProductQuantity] = useState<number>(0);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const onProductNameChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) =>
            setProductName(e.target.value),
        []
    );
    const onProductPriceChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) =>
            setProductPrice(Number(e.target.value)),
        []
    );
    const onProductQuantityChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) =>
            setProductQuantity(Number(e.target.value)),
        []
    );

    useEffect(() => {
        setIsFormValid(
            Boolean(
                productName &&
                    productName.length >= 3 &&
                    productPrice &&
                    productQuantity
            )
        );
    }, [productName, productPrice, productQuantity]);

    return {
        productName,
        productPrice,
        productQuantity,
        isFormValid,
        onProductNameChange,
        onProductPriceChange,
        onProductQuantityChange,
    };
};

export { useProductDialog };
