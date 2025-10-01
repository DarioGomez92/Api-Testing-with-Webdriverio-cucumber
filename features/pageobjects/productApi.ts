import axios, {AxiosResponse} from "axios"

class ProductApi {
    private baseUrl: string

    constructor() {
        this.baseUrl = "https://automationexercise.com/api";
    }

    public async getAllProducts(): Promise<AxiosResponse> {
        return axios.get(`${this.baseUrl}/productsList`)
    }

    public async postAllProducts(): Promise<AxiosResponse> {
        return axios.post(`${this.baseUrl}/productsList`)
    }

    public async getBrandsList(): Promise<AxiosResponse> {
        return axios.get(`${this.baseUrl}/brandsList`)
    }

    public async putBrandsList(): Promise<AxiosResponse> {
        return axios.put(`${this.baseUrl}/brandsList`)
    }

    public async searchProduct(searchItem: string): Promise<AxiosResponse> {
        const params = new URLSearchParams()
        params.append("search_product", searchItem)

        return axios.post(`${this.baseUrl}/searchProduct`, 
            params, { headers: { "Content-Type": "application/x-www-form-urlencoded"}}
        )
    }

    public async searchProductWithoutParam(): Promise<AxiosResponse> {
        const params = new URLSearchParams()

        return axios.post(`${this.baseUrl}/searchProduct`,
            params, { headers: { "Content-Type": "application/x-www-form-urlencoded"}}
        )
    }
}

export default new ProductApi