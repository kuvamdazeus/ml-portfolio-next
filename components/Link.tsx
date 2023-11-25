import { default as NextLink } from "next/link";

export default function Link({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <NextLink
      href={href}
      className="
        underline underline-offset-4 decoration-gray-200 dark:decoration-gray-700
        hover:decoration-transparent dark:hover:decoration-transparent
        focus:decoration-transparent dark:focus:decoration-transparent
        rounded-lg before:rounded-lg transition-colors relative
        p-2 -ml-2 hover:bg-gray-200 dark:hover:bg-gray-800
      "
    >
      <span>{children}</span>
    </NextLink>
  );
}
