export interface Dog {
  id: number
  name: string
  description: string
  category: string
  isActive: boolean
  isChecked?: boolean
  date: string
}

type EditableDogField =
  | 'name'
  | 'description'
  | 'category'
  | 'isActive'
  | 'date'
export type EditableDog = Pick<Dog, EditableDogField>
