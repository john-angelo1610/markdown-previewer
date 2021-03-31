marked.setOptions({breaks: true});

const renderer = new marked.Renderer();

const placeholder = `# This is a header
## This is a sub-header

This text is **bold**
This is a [link](https://jon-gelo616.github.io/john-angelo/) to my portfolio

You can display an inline code \`<h1>Hello World!</h1>\` by putting 2 backticks between the texts
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
        <div className="text-center p-4 mt-3">
            <Toolbar title="Editor" />
            <textarea
                className="textarea w-100 mb-5"
                name="text"
                id="editor"
                rows="10"
                value={text} 
                onChange={e => setText(e.target.value)}
            />
            <Toolbar title="Previewer" />
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

function Toolbar({title}) {
    return (
        <div className="toolbar w-100 d-block m-auto text-left p-2">
            {title}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
