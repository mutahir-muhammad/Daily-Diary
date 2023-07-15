import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    setIsPending(true)
    
    fetch('http://localhost:5050/blogs', {method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      history.push('/')
    })


  }

  return (
    <div className="create">
        <h2>Add a New Log</h2>
        <form onSubmit={handleSubmit}>
          <label>Log title:</label>
          <input type="text" required value={ title } onChange={(e) => setTitle(e.target.value)} />

          <label>Log body</label>
          <textarea required value = {body} onChange={(e) => setBody(e.target.value)}></textarea>

          <label>Log author:</label>
          <input type="text" required maxLength={14} value={ author } onChange={(e) => setAuthor(e.target.value)} />

          { !isPending && <button>Add Blog</button> }
          { isPending && <button disabled>Adding blog...</button> }
        </form>
    </div>
  )
}
