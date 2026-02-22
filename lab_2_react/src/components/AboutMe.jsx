export default function AboutMe() {
  return (
    <section className="md:col-start-1 md:col-end-2 md:row-start-4 p-8 border-b md:border-r border-dashed border-gray-300 bg-gray-50/50 hover:bg-gray-50 transition-colors">
      <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-3">
        <span className="w-1.5 h-5 bg-purple-500 rounded-full inline-block"></span> About Me
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        I am passionate about developing digital experiences that are both visually stunning and intuitive, and always strive to create platforms that delight and engage users.
      </p>
    </section>
  );
}