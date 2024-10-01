import { useLocation } from 'react-router-dom'

const ProjectShow = () => {
  const state = useLocation()
  const product = state.state

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.img}
        alt=''
      />
    </div>
  )
}

export default ProjectShow
