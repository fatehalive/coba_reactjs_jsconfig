function Text(props) {
    return (
        <>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.label}
            </a>
        </>
    )
}

export default Text;