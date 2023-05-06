import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      id: 1,
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: 2,
      label: 'Can I use JavaScript on a project?',
      content:
        'You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.'
    },
    {
      id: 3,
      label: 'Can I use Next.js on a project?',
      content:
        'You can use Next.js on any project you want. You can use Next.js on any project you want. You can use Next.js on any project you want.'
    }
  ]
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App
