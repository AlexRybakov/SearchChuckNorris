import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearch } from "./search.types";

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.chucknorris.io/jokes'}),
    endpoints: (build) => ({
        getSearch: build.query<ISearch, string>({
            query: (input) => `search?query=${input}`,
        })
    })
});

export const {useGetSearchQuery} = searchApi;