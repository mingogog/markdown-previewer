import ReactMarkdown from 'react-markdown'
import { MarkdownOutputContainer } from './MarkdownOutput.styles'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface MarkdownOutputProps{
    markdown: string
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({markdown}: MarkdownOutputProps)=>{
   return (
        <MarkdownOutputContainer style={{whiteSpace: 'pre-wrap'}}>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                children={markdown}
                className="react-mark-down"
            />
        </MarkdownOutputContainer>
   )
} 

export default MarkdownOutput