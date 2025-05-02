import Link from 'next/link';

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2 text-white bg-gray-900">
      Login Page
      <Link href="/content/user">Login</Link>
    </div>
  );
}
