import React from "react";

function Index() {
  return (
    <div>
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Welcome to the World of Horses</h1>
          <p className="mt-4 text-xl">Discover the beauty and majesty of horses.</p>
          <button className="mt-8 px-6 py-3 bg-primary text-white rounded-full">Learn More</button>
        </div>
      </section>

      <section id="about" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">About Horses</h2>
        <p className="mt-4 text-lg">Horses have been an integral part of human history for thousands of years. They have been used for transportation, work, and companionship. Today, horses are cherished for their beauty, strength, and grace.</p>
      </section>

      <section id="breeds" className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Popular Horse Breeds</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img src="/images/breed1.jpg" alt="Breed 1" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Breed 1</h3>
            <p className="mt-2 text-gray-600">Description of Breed 1.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img src="/images/breed2.jpg" alt="Breed 2" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Breed 2</h3>
            <p className="mt-2 text-gray-600">Description of Breed 2.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img src="/images/breed3.jpg" alt="Breed 3" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Breed 3</h3>
            <p className="mt-2 text-gray-600">Description of Breed 3.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img src="/images/gallery1.jpg" alt="Gallery 1" className="w-full h-48 object-cover rounded-lg" />
          <img src="/images/gallery2.jpg" alt="Gallery 2" className="w-full h-48 object-cover rounded-lg" />
          <img src="/images/gallery3.jpg" alt="Gallery 3" className="w-full h-48 object-cover rounded-lg" />
        </div>
      </section>

      <section id="contact" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form className="mt-8 max-w-md mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-lg"></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-primary text-white rounded-full">Send Message</button>
        </form>
      </section>

      <footer className="py-8 px-4 text-center bg-gray-800 text-white">
        <div className="mb-4">
          <a href="#" className="mx-2">Facebook</a>
          <a href="#" className="mx-2">Twitter</a>
          <a href="#" className="mx-2">Instagram</a>
        </div>
        <p>&copy; 2023 Horse World. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Index;