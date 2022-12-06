import Link from "next/link";

export function GraphButton({ href, children, className }: any) {
  return (
    <Link href={href} className={className}>
      <button type="button">{children}</button>
    </Link>
  );
}
