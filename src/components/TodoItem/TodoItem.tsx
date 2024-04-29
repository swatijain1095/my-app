import { TaskName } from "../../types";
import "./style.scss";
import { useState } from "react";

export interface TodoItemProps extends TaskName {
  handleDelete: (id: number) => void;
  handleSelect: (id: number, check: boolean) => void;
  handleEdit: (id: number, value: string) => void;
}

const TodoItem = ({
  id,
  name,
  isCompleted,
  handleDelete,
  handleSelect,
  handleEdit,
}: TodoItemProps) => {
  const [value, setValue] = useState(name);
  const [edit, setEdit] = useState(false);

  const handleClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEdit(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleEdit(id, value);
    setEdit(false);
  };

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
          <span className={isCompleted ? `item--check` : ""}>
            {edit ? (
              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            ) : (
              name
            )}
          </span>
        </div>
        <div className="item__btn">
          {edit ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button onClick={handleClickEdit}>Edit</button>
          )}
          <button data-testid={`delete-${id}`} onClick={() => handleDelete(id)}>
            x
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;
