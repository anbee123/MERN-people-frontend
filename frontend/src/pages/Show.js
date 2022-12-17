import { useParams } from 'react-router-dom'
function Show(props) {
  const { id } = useParams();
  const person = props.people.find((person) => person._id === id)

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />
    </div>
  )
}

export default Show