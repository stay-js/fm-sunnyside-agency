import { useState } from 'react';
import { Logo } from '~/components/logo';
import { cn } from '~/utils/cn';

export const Navigation: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className="relative flex w-full select-none items-center justify-between p-6 text-white">
      <a href="#">
        <Logo />
      </a>

      <button
        className="z-10 h-6 w-6 lg:hidden"
        title="Toggle Menu"
        type="button"
        onClick={() => setIsToggled((value) => !value)}
      >
        <span
          className={cn(
            'absolute block h-0.5 w-6 bg-white/70 transition-all duration-300',
            isToggled ? 'rotate-45' : '-translate-y-2',
          )}
        />
        <span
          className={cn(
            'absolute block h-0.5 w-6 bg-white/70 transition-all duration-300',
            isToggled && 'opacity-0',
          )}
        />
        <span
          className={cn(
            'absolute block h-0.5 w-6 bg-white/70 transition-all duration-300',
            isToggled ? '-rotate-45' : 'translate-y-2',
          )}
        />
      </button>

      <div
        className={cn(
          'left-0 top-12 max-lg:absolute max-lg:w-full max-lg:p-6',
          !isToggled && 'max-lg:hidden',
        )}
      >
        <span className="-z-10 ml-auto block border-y-[2rem] border-r-[2rem] border-y-transparent border-r-off-white lg:hidden" />
        <ul
          className={cn(
            'flex items-center gap-12 max-lg:-mt-8 max-lg:flex-col max-lg:bg-off-white max-lg:p-16 max-lg:text-xl',
            !isToggled && 'max-lg:hidden',
          )}
        >
          {['About', 'Services', 'Projects'].map((item) => (
            <li key={item}>
              <a
                onClick={() => setIsToggled(false)}
                href="#"
                className="text-dark-grayish-blue lg:text-white"
              >
                {item}
              </a>
            </li>
          ))}

          <li>
            <a
              onClick={() => setIsToggled(false)}
              href="#"
              className="block rounded-full bg-yellow px-8 py-4 font-serif text-lg uppercase text-black transition-colors hover:bg-yellow/60 lg:bg-white lg:text-sm lg:hover:bg-white/40 lg:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
