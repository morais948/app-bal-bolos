import { User } from "../../shared/entity/user";
import { DataResponse } from "../../shared/object-value/data.response";
import { ErrorResponse } from "../../shared/object-value/error";
import { Token } from "../../shared/object-value/token";
import { api } from "../../shared/services/api";

export interface Auth{
  login(user: User): Promise<DataResponse<Token>>
}

export class AuthImpl implements Auth{
  async login(user: User): Promise<DataResponse<Token>> {
    try {
      const response = await api.post('/login', {
        email: user.email,
        password: user.password
      })

      const dataResponse = {
        success: true,
        data: response.data.body.data,
        errors: []
      } as DataResponse<Token>
      
      return dataResponse
    } catch (error: any) {
      return {
        success: false,
        data: null,
        errors: [
          {
            message: error.response.data.body.errors[0].message
          }
        ] as ErrorResponse[]
      } as DataResponse<Token>
    }
  }
}
