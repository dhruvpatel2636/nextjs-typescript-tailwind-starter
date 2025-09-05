import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-[820px] space-y-8">
        <header>
          <h1 className="font-inter mb-4 text-4xl text-[#0A0A0A]">
            Welcome to shadcn/ui
          </h1>
          <p className="mb-6 text-gray-600">
            A beautifully designed UI component library for your Next.js
            application.
          </p>
          <div className="flex gap-4">
            <Button>Primary Button</Button>
            <Button variant="outline">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </header>
      </div>
    </div>
  )
}
