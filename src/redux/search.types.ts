export interface ISearch {
    total: number
    result?: IJokes[]
  }
  
export interface IJokes {
    categories: any[]
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
  }