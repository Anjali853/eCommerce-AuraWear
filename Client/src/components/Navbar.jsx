const Navbar = () => {
  return (
    <nav className="w-full h-[80px] flex items-center justify-between px-10 border-b border-white/10 backdrop-blur-lg">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        AURA<span className="text-purple-500">WEAR</span>
      </h1>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-10 text-sm text-white/70">
        <li className="hover:text-purple-400 cursor-pointer transition-all duration-300">
          Home
        </li>

        <li className="hover:text-purple-400 cursor-pointer transition-all duration-300">
          Collections
        </li>

        <li className="hover:text-purple-400 cursor-pointer transition-all duration-300">
          Aura Match
        </li>

        <li className="hover:text-purple-400 cursor-pointer transition-all duration-300">
          Try-On Studio
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <div className="text-right hidden md:block">
          <p className="text-xs text-white/50">LVL 01 ELITE</p>
          <h3 className="text-sm font-semibold">12,450 XP</h3>
        </div>

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
        </div>

      </div>

    </nav>
  )
}

export default Navbar