import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InvalidateQueryFilters } from '@tanstack/react-query';
import axios, { AxiosPromise } from "axios"
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:3013';

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({
                predicate: ['food-data']
            } as unknown as InvalidateQueryFilters);
        }
    })

    return mutate;
}
