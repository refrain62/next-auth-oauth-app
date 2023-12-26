import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';


export default function Login() {
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    return (
      <div>
        <h1 className="title">Create Next App</h1>
        <div>
            <h2>
                Signed in as {session.user.email} : {session.user.name} <br />
            </h2> 
            <div>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => router.push('/Profile')}
                >
                 User Profile
            </button>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => { signOut() }}
                >
                 Sign out
             </button>
              </div>
        </div>
      </div>
    )
  }

  return (
    <div>
        <h1 className="title">Create Next App</h1>
        <div>
            <h2> You are not signed in!!</h2>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => signIn()}
                >
                    Sign in
                </button>
        </div>
    </div>
  )
}
