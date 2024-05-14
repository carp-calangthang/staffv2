import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const putProduct = async (product) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${product.id}`, product);
    return response.data;
};

export const usePutProduct = () => {
    return useQuery({ queryKey: ["product"], queryFn: putProduct });
};