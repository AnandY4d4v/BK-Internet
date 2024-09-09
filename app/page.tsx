/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GhF7MNcnqvU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image"; // Added Next.js image component
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";



export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 font-semibold text-lg" prefetch={false}>
          <WifiIcon className="h-6 w-6" />
          <span>Bharat Internet</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#plans" className="hover:underline" prefetch={false}>
            Plans
          </Link>
          <Link href="#about" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex bg-primary-foreground text-primary font-medium">
          Sign In
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              High-Speed Internet for Your Home and Business
            </h1>
            <p className="text-lg md:text-xl">
              Experience reliable and lightning-fast internet with our affordable plans.
            </p>
            <Link
              href="#plans"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground"
              prefetch={false}
            >
              View Plans
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </section>
        <section id="plans" className="py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Internet Plans</h2>
              <p className="text-muted-foreground text-lg md:text-xl">Choose the plan that fits your needs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>Perfect for small households</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Download Speed</span>
                      <span>25 Mbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Upload Speed</span>
                      <span>10 Mbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Data Cap</span>
                      <span>500 GB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Price</span>
                      <span>₹350/mo</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Sign Up</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                  <CardDescription>Great for medium-sized households</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Download Speed</span>
                      <span>100 Mbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Upload Speed</span>
                      <span>50 Mbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Data Cap</span>
                      <span>1 TB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Price</span>
                      <span>₹699/mo</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Sign Up</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Ideal for businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Download Speed</span>
                      <span>1 Gbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Upload Speed</span>
                      <span>500 Mbps</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Data Cap</span>
                      <span>Unlimited</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Price</span>
                      <span>₹1299/mo</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Sign Up</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="bg-muted py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Bharat Internet</h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Bharat Internet is a leading internet service provider committed to delivering reliable, high-speed internet to
                homes and businesses across the region. With over a decade of experience, we pride ourselves on our
                customer-centric approach and cutting-edge technology.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl">
                Our mission is to empower our customers with the connectivity they need to thrive in the digital age.
                Whether you&apos;re streaming, gaming, or working from home, we&apos;ve got you covered.
              </p>
            </div>
            <div>
              <Image
                src="https://i.postimg.cc/RVDCTQR5/Designer.jpg"
                alt="About Bharat Internet"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Have any questions or need assistance? Our friendly support team is here to help.
            </p>
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
              <Textarea placeholder="Message" rows={4} className="w-full" />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>
        
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-8 lg:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <WifiIcon className="h-6 w-6" />
          <span className="font-semibold">Bharat Intenet</span>
        </div>
        <div className="text-sm text-muted-foreground">&copy; 2024 Bharat Intenet. All rights reserved.</div>
      </footer>
    </div>
  )
}

function ArrowRightIcon({...props}) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function WifiIcon({...props}) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}
