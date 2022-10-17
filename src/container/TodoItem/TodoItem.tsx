import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Checkbox, Chip, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useAppSelector } from 'src/redux/hooks';
import { editTodoSelector, filtersSelector } from 'src/redux/selectors';
import { initEditTodo, resetEditTodo } from 'src/redux/slices/edit-slice';
import { filtersActions } from 'src/redux/slices/filters-slice';
import { todoListActions } from 'src/redux/slices/todo-slice';
import { IPriorityColor, ITodoItem } from 'src/types/types';

const PRIORITY_OPTIONS_COLOR: IPriorityColor = {
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

interface TodoItemProps {
  todo: ITodoItem;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, name, category, priority, completed } = todo;
  const { selected } = useSelector(filtersSelector);

  const { isEdit, currentTodo } = useAppSelector(editTodoSelector);

  const { editTodo, deleteTodo, toggleCompletedStatus } = todoListActions;
  const { selectedFilter } = filtersActions;

  const dispatch = useDispatch();

  const handleEditTodo = () => {
    if (!isEdit) {
      return dispatch(initEditTodo({ id, name, category, priority, completed }));
    }
    dispatch(editTodo(currentTodo));
    dispatch(resetEditTodo());
    toast.success('Updated todo successfully.');
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo([id]));
    toast.success('Deleted todo successfully.');
  };

  const handleToggleCompletedChange = () => {
    dispatch(toggleCompletedStatus(id));
  };

  const handleToggleSelectedChanges = () => {
    dispatch(
      selectedFilter(
        selected.includes(id as number)
          ? selected.filter((item: number) => item !== id)
          : [...selected, id],
      ),
    );
  };

  const isTargetEdit = isEdit && currentTodo?.id === id;
  const isOutOfEdit = isEdit && currentTodo?.id !== id;

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}
      >
        <Checkbox
          checked={selected.includes(id)}
          onChange={handleToggleSelectedChanges}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography
          variant="body1"
          onClick={handleToggleCompletedChange}
          sx={
            completed
              ? { textDecoration: 'line-through', opacity: 0.4, cursor: 'pointer' }
              : { cursor: 'pointer' }
          }
        >
          {name}
        </Typography>
        <Chip label={priority} variant="outlined" color={PRIORITY_OPTIONS_COLOR[priority]} />
      </Box>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Button
          variant="outlined"
          size="small"
          color="pink"
          startIcon={completed ? <CloseIcon /> : <DoneIcon />}
          onClick={handleToggleCompletedChange}
        >
          {completed ? 'Unmarked' : 'Marked'}
        </Button>
        <Button
          variant="outlined"
          size="small"
          color={!isTargetEdit ? 'edit' : 'save'}
          startIcon={!isTargetEdit ? <EditIcon /> : <SaveIcon />}
          onClick={handleEditTodo}
          disabled={isOutOfEdit}
        >
          {!isTargetEdit ? 'Edit' : 'Save'}
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="delete"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteTodo}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
}
