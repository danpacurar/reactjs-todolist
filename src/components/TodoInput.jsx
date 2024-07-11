export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue, inputRef } = props;


  // Function to handle key press in input
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodos(todoValue);
      setTodoValue(""); // Clear the input after adding the todo
    }
  };

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={handleKeyPress} // Add the key down handler here
        placeholder="Enter todo..."
        ref={inputRef}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue(""); // Clear the input after adding the todo
        }}
      >
        Add
      </button>
    </header>
  );
}
