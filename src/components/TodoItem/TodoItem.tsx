import { TaskName } from "../../types";
import "./style.scss";

export interface TodoItemProps extends TaskName {
  // onClick: () => {};
}

const TodoItem = ({ id, name, isCompleted }: TodoItemProps) => {
  return (
    <div className="todo-item">
      <form>
        <div>{name}</div>
        <div>
          <button>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;
