import React from "react";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

function Footer() {
  return(
    <>
    <hr />
    <footer className="py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/the.shubham.thakur/"><FaInstagram size={24} /></a>
            <a href="https://www.facebook.com/its.shubham.thakur"><FaFacebook size={24} /></a>
            <a href="https://x.com/ShxxxaM"><FaSquareXTwitter size={24} /></a>
            <a href="https://www.linkedin.com/in/shxxxam/"><FaLinkedin size={24} /></a>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <p className="text-sm">
              &copy; shxxxam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;
