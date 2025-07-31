export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="border-t border-blue-400" />

      <div className="bg-blue-200 text-sm text-gray-800 px-4 py-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} AH News For Praisindo. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Career</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
