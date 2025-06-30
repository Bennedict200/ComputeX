import Image from "next/image";

export default function NavSection() {
  return (
    <header className="fixed top-2 z-1 p-3 w-full bg-gray-800">
        <div className="w-full flex flex-row justify-between">
            <div>
                <span className="w_logo">ComputeX</span>
            </div>
            <div className="w-1/6">
              <ul className="flex flex-row justify-between p-2">
                <li>
                  <a className="font-bold text-amber-50 cursor-pointer">About</a>
                </li>
                <li>
                  <a className="font-bold text-amber-50 cursor-pointer">Blog</a>
                </li>
                <li>
                  <a className="font-bold text-amber-50 cursor-pointer">Contact</a>
                </li>
              </ul>
            </div>
        </div>
    </header>
  );
}

