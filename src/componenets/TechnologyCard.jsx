import React from 'react';

const TechnologyCard = ({ tech, onAdd, isAdded }) => {
  return (
    <div
      className={`rounded-2xl p-5 flex flex-col justify-between bg-white transition-all duration-200 ${
        isAdded
          ? 'border-2 border-rose-500 shadow-xs'
          : 'border border-gray-100 shadow-xs hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-lg bg-gray-50 p-2 border border-gray-100 flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain mx-auto" />
          </div>
          {tech.badge && (
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                isAdded
                  ? 'bg-rose-50 text-rose-600'
                  : 'bg-blue-50 text-blue-600'
              }`}
            >
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-bold text-lg text-gray-900">{tech.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {tech.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
            {tech.category}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
            {tech.difficulty}
          </span>
          <span className="flex items-center gap-1 text-amber-500 font-semibold ml-auto">
            ★ {tech.rating}
          </span>
        </div>
      </div>

     
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-6 w-full py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
          isAdded
            ? 'bg-white border border-rose-400 text-rose-500 cursor-not-allowed shadow-xs'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;