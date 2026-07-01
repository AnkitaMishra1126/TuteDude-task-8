const EmptyState = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <div className="text-7xl mb-4">
        📋
      </div>

      <h2 className="text-2xl font-semibold text-gray-700">
        {message}
      </h2>

      <p className="text-gray-500 mt-2">
        Click <span className="font-semibold">+ Add Task</span> to create your first task.
      </p>

    </div>
  );
};

export default EmptyState;