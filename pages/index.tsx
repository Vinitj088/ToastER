import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>The Best Slang Thesaurus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div>
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        
        <h1 className="animate-typing overflow-hidden whitespace-nowrap sm:text-6xl text-4xl max-w-[708px] font-bold text-white">
          Ever thought of Gen Z tones?
        </h1>
        <p className="text-white mt-5 text-xl">
          
          This is the best ever Gen Z slang translator.
        </p>
        <p className="text-white mt-5 text-xl">
          Warning: Don't forget to Enjoy!!!! 🫡
        </p>
        <div className="mt-10">
          <Link className="text-white" href="/translator">
            Wanna Try the Translator Now? &rarr;
            { <a className="bg-white rounded-xl text-black font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 hover:text-cyan-600">
              // Try the Slang Translator &rarr;
            </a> }
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
