import { reject } from 'lodash'
import { useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleClick = nextIndex => {
    expandedIndex === nextIndex
      ? setExpandedIndex(null)
      : setExpandedIndex(nextIndex)
  }

  const renderdItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    const icon = (
      <span className='text-2xl'>
        {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
      </span>
    )

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className='flex p-3 bg-gray-600 border-b items-center cursor-pointer justify-between'
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    )
  })

  return (
    <div className=' border-x border-t rounded'>
      <h1>Accordion</h1>
      {renderdItems}
    </div>
  )
}

let sampleArray = [1, 2, 3, 4, 5]
// Array methods
// sampleArray.forEach()
// sampleArray.map()
// console.log(sampleArray.filter(n => n != 2))
// const newArr = [...sampleArray, 6, 7, 8]
// console.log(newArr)

const sampleObject = {
  user: 'Name',
  age: 23,
  isAdmin: true
}

// Const assignment error
// sampleObject = {}

// Spread operator
// Destructuring
// const { user } = sampleObject
// console.log(user)

// const newObject = { ...sampleObject, newAtt: 'Hello' }
// console.log(newObject)

// Async JS using promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

fetchData()
  .then(posts => console.log(posts))
  .catch(err => console.log(err))

// Async JS using async/await
const fetchPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

fetchPosts()

export default Accordion
