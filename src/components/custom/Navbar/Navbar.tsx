import Link from "next/link";

export default function Navbar() {
  const menubar = (
    <>
      <div className="flex items-center justify-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Home
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            About
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Contact
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Contact
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                target="_blank"
                href="https://toufiquer0.netlify.app/"
                tabIndex={0}
                className="btn m-1"
              >
                Design 1
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://symphonious-pixie-dfbf8c.netlify.app/"
                tabIndex={0}
                className="btn m-1"
              >
                Design 1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
  return (
    <main>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-slate-200">
            WebTec
          </a>
          <div className="w-full hidden  md:flex justify-center">{menubar}</div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
