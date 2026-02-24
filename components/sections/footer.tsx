export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-4xl border-t border-border px-6 py-6 md:px-10">
      <p className="font-mono text-xs text-muted-foreground">
        akshaj@portfolio:~$ echo "© {year} "
        <a
          href="https://akshajbisht.me"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto text-primary hover:underline"
        >
          akshajbisht.me
        </a>
      </p>
    </footer>
  );
}
