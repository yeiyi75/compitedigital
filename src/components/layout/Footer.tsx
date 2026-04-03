import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-container py-12 px-8">
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="font-display italic text-[1.1rem] text-surface no-underline"
          >
            compite digital
          </Link>
          <p className="text-[0.82rem] text-surface/50 mt-1">
            &copy; {new Date().getFullYear()} Compite Digital. Todos los derechos reservados.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center md:justify-end gap-6 list-none m-0 p-0">
          <li>
            <Link
              href="/aviso-legal"
              className="text-[0.82rem] text-surface/50 hover:text-surface no-underline transition-colors duration-300"
            >
              Aviso legal
            </Link>
          </li>
          <li>
            <Link
              href="/privacidad"
              className="text-[0.82rem] text-surface/50 hover:text-surface no-underline transition-colors duration-300"
            >
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link
              href="/cookies"
              className="text-[0.82rem] text-surface/50 hover:text-surface no-underline transition-colors duration-300"
            >
              Política de cookies
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
