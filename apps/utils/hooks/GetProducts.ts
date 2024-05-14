import { useQuery, QueryFunction } from "@tanstack/react-query";
import axios from "axios";

type GetPostByIdFunction = QueryFunction<any, [string, number]>;

// get all products in the first page
const getProductsByPage = async (key: number, page = 1) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    return response.data;
};
export const UseGetProductsByPage = () => {
    const data = null; 
    const isLoading = false;
    return { data, isLoading };
};

const getPostById = async (p0: string, postId: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
};
export const useGetPostById = (postId: number) => {
    return useQuery({ 
        queryKey: ['post', postId],
        queryFn: () => getPostById('post', postId)
    });
};