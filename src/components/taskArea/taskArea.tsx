import { Grid, Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { Task } from '../task/task';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status of Your Tasks As On {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter status={Status.todo} count={2} />
          <TaskCounter status={Status.inProgress} count={5} />
          <TaskCounter status={Status.completed} count={3} />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
