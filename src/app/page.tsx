import { Button } from "@/components/ui/button/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = [
    "/images/salad1.jpg",
    "/images/salad2.jpg",
    "/images/salad3.jpg",
  ];
  return (
    <main className="flex flex-col items-center px-20 py-16">
      <div>
        <h1 className="text-7xl text-center	px-8">
          Fresh and healthy salads in a jar
        </h1>
        <div className="flex justify-center space-x-6 py-8">
          <Button
            variant="ghost"
            className="rounded-3xl bg-lime-400 hover:bg-lime-500"
          >
            <Link
              href="/new-order"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              New Order
            </Link>
          </Button>
          <Button variant="outline" className="rounded-3xl">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              More Info
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex space-x-3 py-4">
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              alt={`Salad in a Jar image ${index}`}
              width={240}
              height={240}
              className="rounded-2xl"
            />
          );
        })}
      </div>
    </main>
  );
}
