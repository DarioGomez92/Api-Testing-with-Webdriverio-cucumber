import axios, {AxiosResponse} from "axios"


class loginApi {
    private baseUrl: string

    constructor() {
        this.baseUrl = "https://automationexercise.com/api";
    }

    public async verifyLogin(email: string, password: string): Promise<AxiosResponse> {
        const params = new URLSearchParams()
        params.append("email", email)
        params.append("password", password)

        return axios.post(`${this.baseUrl}/verifyLogin`,
            params, { headers: { "Content-Type": "application/x-www-form-urlencoded"}}
        )
    }

    public async verifyLoginWithoutEmail(password: string): Promise<AxiosResponse> {
        const params = new URLSearchParams()
        params.append("password", password)

        return axios.post(`${this.baseUrl}/verifyLogin`,
            params, { headers: { "Content-Type": "application/x-www-form-urlencoded"}}
        )
    }

    public async deleteVerifyLogin(): Promise<AxiosResponse> {
        return axios.delete(`${this.baseUrl}/verifyLogin`)
    }
}

export default new loginApi