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

const sampleArray = [1, 2, 3, 4, 5]
// Array methods
// sampleArray.forEach()
// sampleArray.map()
// console.log(sampleArray.filter(n => n != 2))

const sampleObject = {
  user: 'Name',
  age: 23,
  isAdmin: true
}
// Spread operator
// Destructuring

export default Accordion
