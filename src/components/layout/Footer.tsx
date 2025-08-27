import React from 'react'
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-background border-t py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col items-center md:items-start md:justify-center">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                className="max-h-8 dark:invert"
                alt="logo"
              />
              <span className="text-lg font-semibold tracking-tighter">
                Digital Wallet Solution
              </span>
            </Link>
            <p className="text-muted-foreground text-center md:text-left">
              Lots of cashback offer that you dont want to miss!!
            </p>
          </div>

       
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-muted-foreground text-center md:text-left">
              <li className="mb-2"><Link to="/" className="hover:text-primary">Home</Link></li>
              <li className="mb-2"><Link to="/#" className="hover:text-primary">About</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground text-center md:text-left">
              Bonosree, Rampura, Dhaka<br />
              Email: info@digitalwallet.com<br />
              Phone: +1888 45886-78090
            </p>
          </div>
        </div>
        <div className="border-t pt-6 mt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Digital Wallet Solution. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
