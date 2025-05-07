'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CSR() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    // console.log('Users', users)

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, [])

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Hi this is Client Side Rendering</h2>

            {isLoading ? (<p>Loading users...</p>) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-lg">
                        <thead>
                            <tr className="bg-gray-900">
                                <th className="px-4 py-2 text-left border-b">Sr.no</th>
                                <th className="px-4 py-2 text-left border-b">User</th>
                                <th className="px-4 py-2 text-left border-b">View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-gray-800">
                                    <td className="px-4 py-2 border-b">
                                        {user.id}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        {user.firstName} {user.lastName}
                                    </td>
                                    <td className="px-4 py-2 border-b">
                                        <Link href={`/CSR/${user.id}`}>
                                            <span className='text-blue-500 hover:underline cursor-pointer'>View Details</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

    );
}