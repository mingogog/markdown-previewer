import { GuideContainer } from './MarkdownGuide.styles'

const MarkdownGuide = () => {
    return (
        <GuideContainer>
            <table>
                <tr>
                    <th>Markdown</th>
                    <th>Html</th>
                </tr>
                <tr>
                    <td># H1</td>
                    <td><code>&lt;h1&gt;H1&lt;/h1&gt;</code></td>
                </tr>
                <tr>
                    <td>## H2</td>
                    <td><code>&lt;h2&gt;H2&lt;/h2&gt;</code></td>
                </tr>
                <tr>
                    <td>### H3</td>
                    <td><code>&lt;h3&gt;H3&lt;/h3&gt;</code></td>
                </tr>
                <tr>
                    <td>**bold**</td>
                    <td><code>&lt;b&gt;bold&lt;/b&gt;</code></td>
                </tr>
                <tr>
                    <td>*italic*</td>
                    <td><code>&lt;l&gt;italic&lt;/l&gt;</code></td>
                </tr>
                <tr>
                    <td>[Link](http://a.com)</td>
                    <td><code>&lt;a href="http://a.com"/&gt;</code></td>
                </tr>
                <tr>
                    <td>![Image](http://url/a.png)</td>
                    <td><code> &lt;img src="http://url/a.png"/&gt;</code></td>
                </tr>
                <tr>
                    <td>`inline code`</td>
                    <td><code>&lt;code&gt;inline code&lt;/code&gt;</code></td>
                </tr>
                <tr>
                    <td>```block code```</td>
                    <td><code>&lt;code&gt;block code&lt;/code&gt;</code></td>
                </tr>
                <tr>
                    <td>- list item</td>
                    <td><code>&lt;ul&gt;&lt;li&gt;list item&lt;li&gt;&lt;/ul;&gt;</code></td>
                </tr>
            </table>
        </GuideContainer>
    )
}

export default MarkdownGuide