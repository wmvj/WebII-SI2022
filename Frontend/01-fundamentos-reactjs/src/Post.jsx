
// props: {author:"", content:""}

export function Post(props) {
    return (
      <div>
        <h1>{props.author}</h1>
        <p>{props.content}</p>
      </div>
    );
}

// defualt export vs named export