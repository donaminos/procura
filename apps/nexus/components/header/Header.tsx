import { navigation } from "@/components/header/constants";
import { Logo } from "@/components/header/Logo";
import { MobileNavigation } from "@/components/header/MobileNavigation";

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>

        <div className="flex lg:hidden"></div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/signin"
            className="text-sm font-semibold leading-6 text-white"
          >
            Sign in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <MobileNavigation />
      </nav>
    </header>
  );
};
