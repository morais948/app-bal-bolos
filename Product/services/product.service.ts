import axios from "axios";
import { CONFIG } from "../../shared/config/config";
import { Product } from "../../shared/entity/product";
import { DataResponse } from "../../shared/object-value/data.response";
import { ErrorResponse } from "../../shared/object-value/error";

export interface ProductService{
  getProducts(): Promise<DataResponse<Product[]>>
}

export class ProductServiceImpl implements ProductService{
  async getProducts(): Promise<DataResponse<Product[]>> {
    try {
      const response = await axios.post(`${CONFIG.mock.url}/products`)

      const dataResponse = {
        success: true,
        data: response.data.body.data,
        errors: []
      } as DataResponse<Product[]>
      
      return dataResponse
    } catch (error: any) {
      //verificar como pegar o erro do axios
      // console.log(error.response)
      return {
        success: false,
        data: null,
        errors: [
          {
            message: 'merda'
          }
        ] as ErrorResponse[]
      } as DataResponse<Product[]>
    }
  }
}
