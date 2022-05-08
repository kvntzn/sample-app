export interface Dog {
  id: number
  name: string
  description: string
  category: string
  isActive: boolean
}

type EditableDogField = 'name' | 'description' | 'category' | 'isActive'
export type EditableDog = Pick<Dog, EditableDogField>
