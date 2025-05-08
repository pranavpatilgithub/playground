import Link from 'next/link'

export default async function ({params}) {
    const id = params.id;
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const userData = await response.json();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>

            <div className="border border-gray-700 px-10 py-2 rounded-xl space-y-1 font-mono text-[15px] max-w-[max-content]">
                <p><strong>Firstname:</strong> {userData.firstName}</p>
                <p><strong>Lastname:</strong> {userData.lastName}</p>
                <p><strong>Age:</strong> {userData.age}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Blood Group: </strong> {userData.bloodGroup}</p>
                <p><strong>Gender: </strong> {userData.gender}</p>
                <p><strong>Birth Date: </strong> {userData.birthDate}</p>
            </div>

            <Link href="/SSR">
                <span className="text-blue-500 mt-4 inline-block">← Back to list</span>
            </Link>
        </div>
    )
}