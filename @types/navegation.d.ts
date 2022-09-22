export interface DasboardData {
  // user: string
  // password: string
  token: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      DASBOARD: Dasboard
    }
  }
}