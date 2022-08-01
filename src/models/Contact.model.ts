import placeholder from '@/assets/photos-placeholder.jpeg';

export interface Contact {
  name: string
  number: string
  id: string
  photo?: string
}



export const emptyContact: Contact = {
  name: '',
  number: '',
  id: '0',
  photo:placeholder
}
