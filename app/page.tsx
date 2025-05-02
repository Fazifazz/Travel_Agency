import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2 text-white bg-gray-900">
      Hello World
      <Button variant={"secondary"}>Click me</Button>
    </div>
  );
}
