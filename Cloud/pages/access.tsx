import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import {  signOut } from "next-auth/react"
import AccessDenied from "../components/access-denied"

export default function AccessPage() {
  const { data: session } = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected")
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        
        <AccessDenied />
        
      </Layout>
    )
  }
 const ethAddress = session.user?.name || "User"
  const shortAddress = `${ethAddress.substring(0, 6)}...${ethAddress.substring(ethAddress.length - 4)}`
  // If session exists, display content
  return (
    <Layout>
      <div className=" mt-14 px-8 lg:px-18 flex flex-col items-center justify-center min-h-screen">
  <h1 className="text-center text-4xl mb-8 text-black">Hello {shortAddress}<br/>Camera <span style={{color: 'green'}}>successfully</span> deactivated</h1>
  <a
                      href={`/api/auth/signout`}
                    className="flex w-auto justify-center rounded-full bg-black px-6 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign out
                    </a>
</div>

    </Layout>
  )
}
