import { useState } from 'react'
import { AppState } from './context/state'
import { Phonebook } from './pages/phone-book/phonebook.page'

function App() {
  return (
    <div className="App">
      <AppState>
        <Phonebook />
      </AppState>
    </div>
  )
}

export default App
