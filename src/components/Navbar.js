import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex align-center justify-between px-10 py-4'>
            <div>
                <p className="font-mono text-[16px]">Play<span className="text-yellow-700">Ground</span></p>
            </div>
            <div className='flex align-center gap-9.5'>
                <Link href="/" className="bg-black text-white border-1 text-[13px] border-[#373738]  px-3 py-1 rounded transition">Home</Link>
                
            </div>
        </nav>
    )
}

