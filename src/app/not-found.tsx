import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mt-[10em] flex place-content-center">
      <div className="flex flex-col items-center gap-5">
        <div className="text-[60px]">404</div>
        <div className="text-[60px]">Not-Found</div>
        <Button
          className="w-full text-[20px]"
          size="lg"
          as={Link}
          href="/Lessons"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
