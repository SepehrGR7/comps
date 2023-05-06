import Button from '.,/components/Button'
import { FiCheck } from 'react-icons/fi'

function ButtonPage() {
  return (
    <div>
      <h1>Components</h1>
      <div className='my-10'>
        <Button primary>Click Here</Button>
      </div>
      <div className='my-10'>
        <Button secondary rounded>
          Click Here
        </Button>
      </div>
      <div className='my-10'>
        <Button success rounded>
          <FiCheck />
          Click Here
        </Button>
      </div>
      <div className='my-10'>
        <Button warning rounded outline>
          Click Here
        </Button>
      </div>
      <div className='my-10'>
        <Button danger>Click Here</Button>
      </div>
    </div>
  )
}

export default ButtonPage
