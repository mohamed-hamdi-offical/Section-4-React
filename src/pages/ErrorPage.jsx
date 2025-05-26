import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
export default function ErrorPage() {
  return (
      <>
          <Navbar />
          <div className="flex items-center justify-center flex-col gap-7 h-screen">
              <div className="flex items-center justify-center text-[2.5em] font-[500]">Not Found Page</div>
              <Link className="w-[10em] h-[2em] bg-[black] text-[1em] font-[500] text-[white] rounded-[1.25em] flex items-center justify-center hover:scale-105 duration-150 " to={"/"}>
                  Back To Home
              </Link>
          </div>
      </>
  );
}
