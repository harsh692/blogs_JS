import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../components/UserContext"

export default function PostPage() {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null)
    const { userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    }, [])

    if (!postInfo) return '';

    return (
        <div className="post-page">
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by {postInfo.author.username}</div>
            {userInfo.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link to={`/edit/${postInfo._id}`} className="edit-btn">
                        Edit this post
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                </div>
            )}
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt="img"></img>
            </div>

            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    )
}