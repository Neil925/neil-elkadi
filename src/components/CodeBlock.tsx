import { useContext } from 'react';
import { CodeBlock, atomOneDark, atomOneLight } from 'react-code-blocks';
import { ThemeContext } from '../context/ThemeContext';

interface CodeBlockArgs {
    code: string,
    language: string,
    showLineNumbers?: boolean,
    highlight?: string
}

export default function MyCodeBlock(props: CodeBlockArgs) {
    const {theme} = useContext(ThemeContext);

    return (
        <CodeBlock
            text={props.code}
            language={props.language}
            theme={theme == "light" ? atomOneLight : atomOneDark}
            showLineNumbers={props.showLineNumbers}
            highlight={props.highlight ?? ''}
        />
    );
}