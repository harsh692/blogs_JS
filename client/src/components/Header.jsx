import { useContext,useEffect } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
export default function Header(){
  const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response => {
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
      })
    })
  }, []);

  const username = userInfo?.username;


  function logout(){
    fetch("http://localhost:4000/logout",{
      credentials:"include",
      method:'POST',
    });
    setUserInfo(null);
  }

    return (
        <header>
        <Link to="/" className='logo'>MyBlog</Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create new post</Link>
              <a onClick={logout}>logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
            </>
          )}
        </nav>
      </header>
    )
}