import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    router.push("/");
  };
  useEffect(() => {
    const logged = localStorage.getItem("user");
    if (logged) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ padding: "10rem" }}>
        <div className="main-title">
          <h1>Hello World</h1>
          {isLogged && <button onClick={logout}>Sign Out</button>}
        </div>
        <ul style={{ padding: "1rem" }}>
          {!isLogged && (
            <>
              <li>
                <Link className="link" href={"login"}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link className="link" href={"join"}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
          <li>
            <Link className="link" href={"counter/01"}>
              01. Redux를 이용한 Counter
            </Link>
          </li>
          <li>
            <Link className="link" href={"counter/02"}>
              02. Redux + custom hook을 이용한 Counter
            </Link>
          </li>
          <li>
            <Link className="link" href={"todo-list"}>
              Todo List
            </Link>
          </li>
          <li>
            <Link className="link" href={"todo-list/todo-use-redux"}>
              Todo List - use - redux - hooks
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
