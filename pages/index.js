import Link from "next/link";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    console.log("index");
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};
export default Index;
