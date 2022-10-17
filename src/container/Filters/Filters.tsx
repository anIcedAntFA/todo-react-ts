import SearchIcon from '@mui/icons-material/Search';
import {
  Autocomplete,
  Box,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';

import { ICategory } from 'src/types/types';
import { filtersSelector } from 'src/redux/selectors';
import { filtersActions } from 'src/redux/slices/filters-slice';

const PRIORITY_OPTIONS: ICategory[] = [
  { title: 'High', color: 'high' },
  { title: 'Medium', color: 'medium' },
  { title: 'Low', color: 'low' },
];

const CATEGORY_OPTIONS: ICategory[] = [
  { title: 'Coding', color: 'category' },
  { title: 'Dating', color: 'pink' },
];

export default function Filters() {
  const { search, status, sorting, categories, priorities } = useSelector(filtersSelector);

  const dispatch = useDispatch();

  const {
    searchFilterChange,
    statusFilterChange,
    sortingFilterChange,
    categoriesFilterChange,
    prioritiesFilterChange,
  } = filtersActions;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchFilterChange(event.target.value));
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    dispatch(statusFilterChange(event.target.value));
  };

  const handleSortingChange = (event: SelectChangeEvent) => {
    dispatch(sortingFilterChange(event.target.value));
  };

  const handleCategoriesChange = (_: any, newValue: any) => {
    dispatch(categoriesFilterChange(newValue));
  };

  const handlePrioritiesChange = (_: any, newValue: any) => {
    dispatch(prioritiesFilterChange(newValue));
  };

  return (
    <Stack direction="column" spacing={1}>
      <FormControl variant="outlined" size="small">
        <FormLabel id="search">Search</FormLabel>
        <OutlinedInput
          id="search"
          value={search}
          onChange={handleSearchChange}
          endAdornment={
            <InputAdornment position="end">
              <Divider sx={{ height: 32, mr: '12px' }} orientation="vertical" />
              <IconButton
                type="button"
                aria-label="search"
                onClick={() => {
                  console.log('search');
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}
      >
        <FormControl>
          <FormLabel id="filter-by-status">Filter By Status</FormLabel>
          <RadioGroup
            row
            aria-labelledby="filter-by-status"
            name="filter-by-status"
            value={status}
            onChange={handleStatusChange}
            sx={{ gap: 1 }}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
            <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
          </RadioGroup>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <FormLabel id="sorting">Sorting</FormLabel>
          <Select labelId="sorting" id="sorting" value={sorting} onChange={handleSortingChange}>
            <MenuItem value="alphabet-asc">A to Z</MenuItem>
            <MenuItem value="alphabet-desc">Z to A</MenuItem>
            <MenuItem value="priority-asc">Priority: Low to High</MenuItem>
            <MenuItem value="priority-desc">Priority: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <FormControl>
        <FormLabel id="filter-by-categories">Filter By Categories</FormLabel>
        <Autocomplete
          multiple
          id="filter-by-categories"
          value={categories}
          onChange={handleCategoriesChange}
          options={CATEGORY_OPTIONS}
          getOptionLabel={(option) => option.title}
          defaultValue={[CATEGORY_OPTIONS[0]]}
          filterSelectedOptions
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option.title}
                color={option.color}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => <TextField {...params} placeholder="Categories" />}
          size="small"
        />
      </FormControl>

      <FormControl>
        <FormLabel id="filter-by-priorities">Filter By Priorities</FormLabel>
        <Autocomplete
          multiple
          id="filter-by-priority"
          value={priorities}
          onChange={handlePrioritiesChange}
          options={PRIORITY_OPTIONS}
          getOptionLabel={(option) => option.title}
          defaultValue={[PRIORITY_OPTIONS[1]]}
          filterSelectedOptions
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option.title}
                color={option.color}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => <TextField {...params} placeholder="Priorities" />}
          size="small"
        />
      </FormControl>
    </Stack>
  );
}
