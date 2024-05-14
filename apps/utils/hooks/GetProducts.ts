import { useQuery, QueryFunction } from "@tanstack/react-query";
import axios from "axios";

// Định nghĩa hàm lấy sản phẩm theo trang
const getProductsByPage = async (page: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    return response.data;
};

// Hook để sử dụng getProductsByPage
export const useGetProductsByPage = (page: number) => {
    const query = useQuery({
        queryKey: ['products', page],
        queryFn: () => getProductsByPage(page),
    });

    return {
        data: query.data,
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
    };
};

const getPostById = async (postId: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
};

export const useGetPostById = (postId: number) => {
    const query = useQuery({
        queryKey: ['post', postId],
        queryFn: () => getPostById(postId),
    });

    return {
        data: query.data,
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
    };
};