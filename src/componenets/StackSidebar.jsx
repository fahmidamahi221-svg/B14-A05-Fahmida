import React from 'react';

const StackSidebar = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-6 sticky top-20">
      <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
      <p className="text-sm text-gray-500 mt-1">
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-6 border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-400 font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-xs"
              >
                <div className="flex items-center space-x-3">
                  <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                    <span className="text-xs text-gray-400">{item.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer text-lg"
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 border border-red-200 text-red-500 rounded-xl text-sm font-semibold hover:bg-red-50 transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;