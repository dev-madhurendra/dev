import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col max-h-screen">

        <main className="flex-grow">
            <div className="container mx-auto py-8">
                
            </div>
        </main>

        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Your Website. All rights reserved.</p>
                <p className="mt-2">Made with <span className="text-red-600">&hearts;</span> using Tailwind CSS</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer