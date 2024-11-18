import React from 'react';
import { NavLink } from 'react-router-dom';
import { Feather, BookOpen, PenTool, Users, Award, Share2 } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/stories" className="flex items-center space-x-2 text-xl font-bold">
            <Feather className="h-6 w-6" />
            <span>Tales & Trail</span>
          </NavLink>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/stories" className="flex items-center space-x-1 hover:text-amber-200 transition">
              <BookOpen className="h-5 w-5" />
              <span>Stories</span>
            </NavLink>
            <NavLink to="/write" className="flex items-center space-x-1 hover:text-amber-200 transition">
              <PenTool className="h-5 w-5" />
              <span>Write</span>
            </NavLink>
            <NavLink to="/about" className="flex items-center space-x-1 hover:text-amber-200 transition">
              <Users className="h-5 w-5" />
              <span>About</span>
            </NavLink>
            <NavLink to="/leaderboard" className="flex items-center space-x-1 hover:text-amber-200 transition">
              <Award className="h-5 w-5" />
              <span>Leaderboard</span>
            </NavLink>
            <NavLink to="/social" className="flex items-center space-x-1 hover:text-amber-200 transition">
              <Share2 className="h-5 w-5" />
              <span>Connect</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;