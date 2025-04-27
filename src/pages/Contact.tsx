export default function Contact() {
    return (
      <div className="px-6 py-20 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Your message"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-black font-semibold py-2 px-6 rounded hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }