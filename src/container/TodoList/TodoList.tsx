import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { nanoid } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import { useEffect, useRef, useState } from 'react';

import { toast } from 'react-toastify';
import { AlertDialog } from 'src/components/Dialog';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { filtersSelector, todoRemainingSelector } from 'src/redux/selectors';
import { initEditTodo } from 'src/redux/slices/edit-slice';
import { filtersActions } from 'src/redux/slices/filters-slice';
import { todoListActions } from 'src/redux/slices/todo-slice';
import { ICategory, ITodoItem } from 'src/types/types';
import Todo from '../TodoItem';

const PRIORITY_OPTIONS: ICategory[] = [
  { title: 'High', color: 'high' },
  { title: 'Medium', color: 'medium' },
  { title: 'Low', color: 'low' },
];

const CATEGORY_OPTIONS: ICategory[] = [
  { title: 'Coding', color: 'category' },
  { title: 'Dating', color: 'pink' },
];

const INITIAL_EDITED_TODO: Partial<ITodoItem> = {
  name: '',
  category: 'Coding',
  priority: 'Medium',
};

const OPTIONS = ({ handleDeleteManyTodo }: any) => {
  return [
    {
      title: 'Marked',
      color: '#ec407a',
      icon: <DoneIcon />,
      onClick() {
        handleDeleteManyTodo();
      },
    },
    {
      title: 'Edit',
      color: '#ff6d00',
      icon: <EditIcon />,
      onClick() {
        handleDeleteManyTodo();
      },
    },
    {
      title: 'Delete',
      color: '#aa00ff',
      icon: <DeleteIcon />,
      onClick() {
        handleDeleteManyTodo();
      },
    },
  ];
};

export default function TodoList() {
  const [todo, setTodo] = useState<Partial<ITodoItem>>(INITIAL_EDITED_TODO);
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { name, category, priority } = todo;

  const todoList = useAppSelector(todoRemainingSelector);
  const { selected } = useAppSelector(filtersSelector);
  const { isEdit, currentTodo } = useAppSelector((state) => state.editTodo);

  const { addTodo, deleteTodo } = todoListActions;
  const { selectedFilter } = filtersActions;

  const dispatch = useAppDispatch();

  const addTodoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit) {
      dispatch(initEditTodo(todo));
    }
  }, [todo]);

  useEffect(() => {
    if (isEdit) {
      setTodo(currentTodo!);
    } else {
      setTodo(INITIAL_EDITED_TODO);
    }
  }, [isEdit]);

  const handleToggleSelectAll = () => {
    dispatch(selectedFilter(selected.length ? [] : todoList.map((todo) => todo.id)));
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openOption = Boolean(anchorElUser);

  const handleDeleteManyTodo = () => {
    if (isEmpty(selected)) {
      return toast.error('Please select at least one todo.');
    }
    setOpenModal(true);
  };

  const handleInputTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setTodo((prev) => ({ ...prev, category: event.target.value }));
  };

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setTodo((prev) => ({ ...prev, priority: event.target.value }));
  };

  const handleAddTodo = () => {
    if (name?.trim().length === 0) {
      return toast.info('Please add todo first');
    }
    dispatch(
      addTodo({
        id: nanoid(),
        name,
        category,
        priority,
        completed: false,
      }),
    );
    toast.success('Added todo successfully.');
    setTodo(INITIAL_EDITED_TODO);
    addTodoRef.current?.focus();
  };

  const handleAgreeDeleteManyTodo = () => {
    dispatch(deleteTodo(selected));
    toast.success('Deleted todo successfully.');
    setOpenModal(false);
  };
  const handleCloseDeleteManyTodo = () => setOpenModal(false);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <FormControlLabel
          control={
            <Checkbox
              // size="large"
              checked={selected.length === todoList.length}
              onChange={handleToggleSelectAll}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Select All"
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 28 },
            '&	.MuiFormControlLabel-label': {
              fontSize: 20,
              fontWeight: 'semi-bold',
              backgroundColor: 'yellow',
            },
          }}
        />
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box sx={{ flexGrow: 0 }}>
            <Button
              id="demo-customized-button"
              aria-controls={openOption ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openOption ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleOpenUserMenu}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Options
            </Button>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {OPTIONS({ handleDeleteManyTodo }).map((option, index) => (
                <MenuItem key={index} onClick={option.onClick}>
                  <ListItemIcon sx={{ color: option.color }}>{option.icon}</ListItemIcon>
                  <ListItemText sx={{ color: option.color }}>{option.title}</ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        sx={{
          height: '210px',
          maxHeight: '210px',
          paddingRight: '12px',
          overflow: 'hidden',
          overflowY: 'scroll',
        }}
      >
        {todoList.map((todoItem) => (
          <Todo key={todoItem.id} todo={todoItem} />
        ))}
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1} mt={6}>
        <TextField
          id="add-todo"
          label="Add todo"
          size="small"
          inputRef={addTodoRef}
          value={name}
          onChange={handleInputTodoChange}
          sx={{ flex: 1, '& .MuiInputBase-root': { height: 48 } }}
        />
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            labelId="category-options-label"
            id="category-options"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
            sx={{ height: '49px' }}
          >
            {CATEGORY_OPTIONS.map((option, index) => (
              <MenuItem key={index} value={option.title}>
                <Chip label={option.title} variant="outlined" color={option.color} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Priority</InputLabel>
          <Select
            labelId="priority-options-label"
            id="priority-options"
            value={priority}
            label="Priority"
            onChange={handlePriorityChange}
          >
            {PRIORITY_OPTIONS.map((option, index) => (
              <MenuItem key={index} value={option.title}>
                <Chip label={option.title} variant="outlined" color={option.color} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="add"
          onClick={handleAddTodo}
          disabled={isEdit}
          sx={{ width: '86.1px', height: '49px' }}
        >
          Add
        </Button>
      </Stack>
      <AlertDialog
        open={openModal}
        onClose={handleCloseDeleteManyTodo}
        onAgree={handleAgreeDeleteManyTodo}
        title="Are you sure you want to delete this todo?"
        content=""
      />
    </>
  );
}
