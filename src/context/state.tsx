import { Contact } from '@/models/Contact.model'
import { createContext, FC, useState } from 'react'

interface AppContext {
  contacts: Array<Contact>
}

export const AppContext = createContext<AppContext>({
  contacts: [],
})

export function AppState(props: { children: React.ReactElement }) {
  const [contacts, setContacts] = useState<Array<Contact>>([
    { name: 'Arto helles', number: '040-123456', id: '1' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: '2' },
    { name: 'Dan Abramov', number: '12-43-234345', id: '3' },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: '4' },
  ])

  return (
    <AppContext.Provider value={{ contacts }}>
      {props.children}
    </AppContext.Provider>
  )
}
