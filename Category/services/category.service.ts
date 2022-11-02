import axios from "axios";
import { CONFIG } from "../../shared/config/config";
import { Category } from "../../shared/entity/category";
import { DataResponse } from "../../shared/object-value/data.response";
import { ErrorResponse } from "../../shared/object-value/error";

export interface CategoryService{
  getCategorys(): Promise<DataResponse<Category[]>>
}

export class CategoryServiceImpl implements CategoryService{
  async getCategorys(): Promise<DataResponse<Category[]>> {
    try {
      const response = await axios.post(`${CONFIG.mock.url}/categorys`)

      const dataResponse = {
        success: true,
        data: response.data.body.data,
        errors: []
      } as DataResponse<Category[]>
      
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
      } as DataResponse<Category[]>
    }
  }
}
