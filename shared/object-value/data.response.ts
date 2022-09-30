import { ErrorResponse } from "./error"

export type DataResponse<T> = {
  success: boolean
  data: T | null
  errors: ErrorResponse[]
}