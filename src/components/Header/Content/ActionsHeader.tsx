'use client';
import { usePathname } from 'next/navigation';
import {
  MagnifyingGlass,
  Heart,
  ShoppingCart,
  User
} from '@phosphor-icons/react';
import Link from 'next/link';

export function HeaderActions() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-6">
      <div className="flex justify-between items-center py-[7px] px-3 bg-white-secondary max-w-[246px] w-full h-8 rounded">
        <input
          type="text"
          name="search"
          className="bg-white-secondary"
          placeholder="O que você procura?"
        />
        <button>
          <MagnifyingGlass size={25} />
        </button>
      </div>

      <div className="flex items-center gap-1.5">
        <Link
          href="/wishlist"
          className="w-8 h-8 flex justify-center items-center"
        >
          {pathname === '/wishlist' ? (
            <Heart size={25} weight="fill" color="#db4444" />
          ) : (
            <Heart size={25} alt="link wishlist" />
          )}
        </Link>

        <button className="flex justify-center items-center w-8 h-8">
          <ShoppingCart size={25} alt="open minicart" />
        </button>

        <button className="flex justify-center items-center w-8 h-8">
          <User size={25} alt="sigIn" />
        </button>
      </div>
    </div>
  );
}
