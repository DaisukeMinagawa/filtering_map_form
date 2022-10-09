import React, { ChangeEvent } from 'react'
import './App.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { uuid } from 'uuidv4'

type ListItem = {
  id: string,
  content: string,
}

const App = () => {
  const [input, setInput] = useState("")
  const [listItems, setListItems] = useState<ListItem[]>([])
  const [filtering, setFiltering] = useState(0)
  // const listItems: string[] = ['Desk', 'Bike', 'Car', 'Apple']
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const onClickRegister = () => {
    const item = { id: uuidv4(), content: input }
    setListItems((prev) => [...prev, item])
    setInput("")
  }

  const onChangeFiltering = (e: ChangeEvent<HTMLElement>) => {
    const num = Number((e.target as HTMLInputElement).value)
    setFiltering(num)
  }
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Learn React</h1>
        </div>
        <input type="text" value={input} onChange={onChangeInput} />
        <button onClick={onClickRegister}>Register</button>
        <select onChange={onChangeFiltering}>
          <option value="0">all</option>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
        <ul>
          {listItems.filter(item => item.content.length > filtering).length <= 0 && <h2>No Content</h2>}
          {listItems.filter(item => item.content.length > filtering).map((item) => { return <li key={item.id}>{item.content}</li> })}
        </ul>
      </div>
    </div>
  )
}

export default App
