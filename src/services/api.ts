import axios, { AxiosInstance } from 'axios';
import { config } from '../config';
import { handleRequest } from './http-helpers';

export class Api {
    static axios: AxiosInstance = axios.create({
        baseURL: config.api_base_url,
        withCredentials: false,
        // headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${config.token}`,
        // },
    });

    static getClinics(): Promise<void> {
        return handleRequest<void>(Api.axios.get('/clinics')
        );
    }

    static getClinicById(id: string): Promise<void> {
        return handleRequest<void>(Api.axios.get(`/clinics/${id}`)
        );
    }

}
