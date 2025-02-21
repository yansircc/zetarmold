export default function Demo() {
  return (
    <div className="relative">
      {/* Sticky header */}
      <div
        className="sticky z-50 bg-green-500 p-4 text-white"
        style={{
          position: 'sticky',
          top: '64px', // Account for navbar height
          height: 'fit-content',
        }}
      >
        This is a sticky header
      </div>

      {/* Content sections */}
      <div className="relative">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`border-b border-gray-200 p-8 ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <h2 className="text-xl font-semibold">Section {index + 1}</h2>
            <p className="mt-2">
              This is some content to demonstrate scrolling. The green header
              above should stick to the top as you scroll through these
              sections.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
