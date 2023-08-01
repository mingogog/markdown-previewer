import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MarkdownInput from './components/MarkdownInput/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput/MarkdownOutput'
import MarkdownGuide from './components/MarkdownGuide/MarkdownGuide'
import { styled } from 'styled-components'

const MarkdownContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

function App() {
  const [markdown, setMarkdown] = useState('')
  const [showGuide, setShowGuide] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    const value = event.target.value;
    setMarkdown(value)
  }
  const onToggleGuide = () => {
    setShowGuide(prev=>{
      return !prev
    })
  }
  return (
    <div className="App">
      <Header onToggleGuide={onToggleGuide} />
      { showGuide && <MarkdownGuide /> }
      <MarkdownContainer>
        <MarkdownInput onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </MarkdownContainer>
    </div>
  )
}

export default App
