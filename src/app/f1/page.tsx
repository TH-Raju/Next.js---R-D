import Link from "next/link";

export default function f1() {
  return (
    <div>
      <h1>f1</h1>
      <Link href="f1/f2">
        <p>f2</p>
      </Link>
    </div>
  );
}
