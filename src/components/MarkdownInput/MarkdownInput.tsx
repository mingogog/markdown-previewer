import { MarkdownInputContainer } from './MarkdownInput.styles'
import React from 'react';

interface MarkdownInputProps{
    value: string,
    onChange: (data: object) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({value, onChange}: MarkdownInputProps) => {
    return (
        <MarkdownInputContainer>
            <textarea value={value} onChange={onChange}></textarea>
        </MarkdownInputContainer>
    )
}
export default  MarkdownInput