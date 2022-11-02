import { API_URL, MOCK_URL } from '@env'

export const CONFIG = {
  api: {
    url: API_URL || 'http://localhost:3000'
  },
  mock: {
    url: MOCK_URL || 'http://192.168.1.88:3000'
  }
}