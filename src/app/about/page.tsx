
import Button from "./Button"
import Link from "next/link"
export default async function AboutPage() {
    const res = await fetch("https://dummyjson.com/users", {
      cache: "no-store",
    });
    const posts = await res.json()
    console.log(posts)
    return(
        <div>
            <Link href="/">back</Link>
            <h1>About Us</h1>
            <p>This is the about page of our Next.js application.</p>
            <Button data={posts.users}/>
        </div>
    )
}