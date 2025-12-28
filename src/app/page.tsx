import Link from "next/link"
import Image from "next/image"
import next from "./assets/profile.jpeg"
export default function Home () {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page of our Next.js application.</p>
      <Link href="/about">Go to about page</Link>
      <Image 
       src="https://unsplash.com/photos/tractor-harvesting-crops-in-a-field-DdcWKBbJeEI"
       alt="Next.js Logo"
        width={188}
        height={38}
        priority
      />
    </div>
  )
}