import { AppContext } from '@/context/state'
import { useContext } from 'react'

export function ListContacts() {
  const appContext = useContext(AppContext)

  return (
    <article>
      <h3>contacts</h3>
      <ol>
        {appContext.contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ol>
    </article>
  )
}
