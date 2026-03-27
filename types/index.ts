export interface Course {
  id: number
  title: string
  category: string
  hours: number
  level: string
  price: number
  free: boolean
  description?: string
  url?: string
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
}
