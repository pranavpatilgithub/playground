'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function UserDetials() {
    const params = useParams();
    const { id } = params;
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchuserid() {
            try {
                const res = await fetch(`https://dummyjson.com/users/${id}`)
                const userData = await res.json();
                setUser(userData);
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }

        }
        fetchuserid();
    }, [id])

    if (isLoading) {
        return <p>Loading ...</p>

    }

    if (!user) {
        return <p>User not found</p>
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>

            <div className="border border-gray-700 px-10 py-2 rounded-xl space-y-1 font-mono text-[15px] max-w-[max-content]">
                <p><strong>Firstname:</strong> {user.firstName}</p>
                <p><strong>Lastname:</strong> {user.lastName}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>

            <Link href="/CSR">
                <span className="text-blue-500 mt-4 inline-block">← Back to list</span>
            </Link>
        </div>

    );

}