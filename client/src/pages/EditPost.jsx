import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";

export default function EditPost() {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { id } = useParams();

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("content", content);
        data.set("summary", summary);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        data.set("id", id);
        await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data,
            credentials: "include",
        })
        setRedirect(true);
    }

    useEffect(() => {
        fetch(`http://localhost:4000/post/` + id).then(response => {
            response.json().then(postInfo => {
                setTitle(postInfo.title);
                setContent(postInfo.content);
                setSummary(postInfo.summary);
            })

        })
        console.log(id);
    }, []);

    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }
    return (
        <form onSubmit={updatePost}>
            <input
                type="title"
                value={title}
                placeholder={"Title"}
                onChange={(ev) => {
                    setTitle(ev.target.value);
                }}
            />

            <input
                type="summary"
                value={summary}
                placeholder={"Summary"}
                onChange={(ev) => setSummary(ev.target.value)}
            />
            <input
                type="file"
                onChange={(ev) => {
                    setFiles(ev.target.files);
                }}
            />
            <Editor value={content} onChange={setContent} />
            <button type="submit" style={{ marginTop: "5px" }}>Update post</button>
        </form>
    );
}

