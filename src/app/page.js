import "./globals.css";
import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex align-center justify-center my-44">
      <div className="border-1 border-[#373738] max-w-xl p-6 rounded-2xl">
        <h1>This website is practice project for implementing data fetching techniques in NextJS</h1>
        <ul className="list-disc list-inside px-10 text-[#c4c4c4] space-y-2">
          <li>
            CSR : Client Side Rendering  <Link href="/CSR" className="bg-black text-blue-500 border-1 text-[13px] border-[#373738] px-3 py-1 rounded transition">Demo</Link>
          </li>
          <li>
            SSR : Server Side Rendering <Link href="/SSR" className="bg-black text-blue-500 border-1 text-[13px] border-[#373738] px-3 py-1 rounded transition">Demo</Link>
          </li>
          <li>
            SSG : Static Site Generation <Link href="/" className="bg-black text-blue-500 border-1 text-[13px] border-[#373738] px-3 py-1 rounded transition">Demo</Link>
          </li>
          
          <li>
            Form handling : <Link href="/" className="bg-black text-blue-500 border-1 text-[13px] border-[#373738] px-3 py-1 rounded transition">Demo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}