import { TaskName } from "../../types";
import "./style.scss";

export interface TodoItemProps extends TaskName {
  handleDelete: (id: number) => void;
  handleSelect: (id: number, check: boolean) => void;
}

const TodoItem = ({
  id,
  name,
  isCompleted,
  handleDelete,
  handleSelect,
}: TodoItemProps) => {
  return (
    <div className="item">
      <form className="item__form">
        <div className="item__name">
          <input
            data-testid={`check-${id}`}
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => {
              handleSelect(id, !isCompleted);
            }}
          />
          <span className={isCompleted ? `item--check` : ""}>{name}</span>
        </div>
        <div className="item__btn">
          <button>Edit</button>
          <button data-testid={`delete-${id}`} onClick={() => handleDelete(id)}>
            x
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;
