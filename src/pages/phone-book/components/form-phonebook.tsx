export function FormPhonebook() {
    
  return (
    <form>
      <label htmlFor="">
        name <input type="text" name="name" id="name" className="input" />
      </label>
      <label htmlFor="">
        number <input type="text" name="number" id="number" className="input" />
      </label>
    </form>
  )
}
