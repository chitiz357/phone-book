import { FormPhonebook } from "./components/form-phonebook";
import { ListContacts } from "./components/list-contacts";


export function Phonebook() {
  return (
    <section>
      <h2 className="tittle">Phone Book</h2>
      <FormPhonebook />
      <ListContacts />
    </section>
  )
}
