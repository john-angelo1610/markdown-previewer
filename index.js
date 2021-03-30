marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();

const placeholder = `# This is a header
## This is a sub-header

This text is **bold**
This is a [link](https://jon-gelo616.github.io/john-angelo/) to my portfolio

You can dispaly an inline code \`<h1>Hello World!</h1>\` by putting 2 backticks between the texts
or a code block with three backticks between the texts
\`\`\`
// this is multi-line code:

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
\`\`\`

These are examples of List:
- Unordered List
    - Item 1
    - Item 2
    - Item 3
- Ordered List
    1. Item 1
    1. Item 2
    1. Item 3

> This is a Block Quote!

Embedded Images:
![Comic Synergy Logo](https://jon-gelo616.github.io/Comic_Synergy/img/logo.png)
`;

function App() {
    const [text, setText] = React.useState(placeholder);

    return (
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea
                className="textarea w-100"
                name="text"
                id="editor"
                rows="10"
                value={text} 
                onChange={e => setText(e.target.value)}
            />
            <h2 className="my-3">Output</h2>
            <Preview markdown={text} />
        </div>
    );
}

function Preview({markdown}) {
    return(
        <div
            className="text-left mb-2"
            dangerouslySetInnerHTML={{
                __html: marked(markdown, {renderer: renderer}),
            }}
            id="preview"
        />
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));