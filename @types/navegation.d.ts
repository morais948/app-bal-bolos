export interface DasboardData {
  user: string
  password: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      DASBOARD: Dasboard
    }
  }
}