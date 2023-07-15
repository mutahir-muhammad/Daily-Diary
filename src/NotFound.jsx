import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div className="not-found">
        <h2>Sorry...</h2>
        <h3>404 page not found</h3>
        <Link to='/'>Go back to homepage</Link>
    </div>
  )
}
