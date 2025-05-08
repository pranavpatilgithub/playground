import Link from 'next/link'

export default async function SSR() {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    return (
        <div className='overflow-x-auto p-10'>
            <h2 className='text-[18px] text-yellow-500 my-2'>This is Sever Side rendering</h2>
            <table className='w-[600px]'>
                <thead className=" border border-gray-300 rounded-lg">
                    <tr className="bg-gray-900">
                        <th className="px-4 py-2 text-left border-b">Sr.no</th>
                        <th className="px-4 py-2 text-left border-b">User</th>
                        <th className="px-4 py-2 text-left border-b">View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-800">
                            <td className="px-4 py-2 border-b">
                                {user.id}
                            </td>
                            <td className="px-4 py-2 border-b">
                                {user.firstName} {user.lastName}
                            </td>
                            <td className="px-4 py-2 border-b">
                                <Link href={`/SSR/${user.id}`}>
                                    <span className='text-blue-400 hover:underline cursor-pointer'>View Details</span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}


