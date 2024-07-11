import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalenderStyles.css';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { colors } from '../../../utils/colors';
import CustomButton from '../../common/CustomButton';
import CustomTodoCard from '../../common/CustomTodoCard';
import { todoList } from '../../../utils/todoData';
import { Link } from 'react-router-dom';

const localizer = momentLocalizer(moment);

const Calender = () => {
  const [value, setValue] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const today = dayjs();

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Mock schedule data for the selected date
    setEvents([
      {
        from: 'KSR',
        to: 'LHR',
        busNo: '1121',
        passengers: '20',
        start: new Date('2024-07-11T10:00:00'),
        end: new Date('2024-07-11T12:00:00'),
      },
      {
        from: 'KSR',
        to: 'LHR',
        busNo: '1121',
        passengers: '20',
        start: new Date('2024-07-11T17:00:00'),
        end: new Date('2024-07-11T19:00:00'),
      },
    ]);
  }, [value]);

  const filteredEvents = events.filter(event =>
    dayjs(event.start).isSame(value, 'day')
  );

  const EventComponent = ({ event }) => (
    <Box mt={2} ml={3}>
      <Typography fontSize={18}>{event.from} - {event.to} </Typography>
      <Typography fontSize={18}>Bus No. {event.busNo}</Typography>
      <Typography fontSize={18}>Passengers : {event.passengers}</Typography>
    </Box>
  );

  return (
    <Box>
      {/* heading */}
      <Grid container justifyContent={'space-between'}>
        <Grid item xs={3}>
          <Typography variant='h4' fontWeight={'bold'}>{value.format('DD-MM-YYYY')}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Link to={'/driver/schedule/add-schedule'}>
            <CustomButton
              btnName={'Create New Record'}
              width={'100%'}
              gap={'6px'}
              fontSize={'12px'}
              marginRight={'10px'}
              borderRadius={'6px'}
              fontWeight={500}
              icon={true}
            />
          </Link>
        </Grid>
      </Grid>

      {/* calendar & todo */}
      <Grid container justifyContent={'space-between'} mt={5}>
        <Grid item xs={7}>
          <Calendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            views={['day']} // Show only day view
            defaultView="day"
            onNavigate={(date) => handleDateChange(dayjs(date))}
            min={new Date(2024, 6, 10, 10, 0)} // Start time at 8 AM
            max={new Date(2024, 6, 10, 21, 0)} // End time at 8 PM
            toolbar={false} // Remove the toolbar
            maxDate={new Date()} // Disable future dates
            components={{
              event: EventComponent,
            }}
            style={{
              height: 700,
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display={'flex'} justifyContent={'end'} mb={3}>
              <DateCalendar
                value={value}
                onChange={handleDateChange}
                maxDate={today} // Disable future dates
                sx={{
                  width: '100%',
                  "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {
                    backgroundColor: colors.dateBgColor,
                  },
                  "& .MuiTypography-root.MuiDayCalendar-weekDayLabel": {
                    color: 'black',
                    fontWeight: 600
                  },
                  "& .MuiPickersCalendarHeader-root": {
                    paddingLeft: 3,
                  },
                  "& .MuiDayCalendar-header": {
                    gap: '20px'
                  },
                  "& .MuiDayCalendar-weekContainer": {
                    gap: '20px'
                  },
                }}
              />
            </Box>
          </LocalizationProvider>

          {/* Todo */}
          <Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Typography variant='body1'>To Do:</Typography>
              <CustomButton
                btnName={'Add New'}
                width={'100%'}
                fontSize={'12px'}
                gap={'6px'}
                height={'32px'}
                borderRadius={'6px'}
                fontWeight={500}
                icon={true}
              />
            </Box>

            {/* todo card */}
            <CustomTodoCard
              bgcolor={colors.todoColor1}
              headingPL={4}
              headingPR={2}
              boxGap={1}
              listPL={9.5}
              todoList={todoList}
            />
            <CustomTodoCard
              bgcolor={colors.todoColor2}
              headingPL={4}
              headingPR={2}
              boxGap={1}
              listPL={9.5}
              todoList={todoList}
            />
            <CustomTodoCard
              bgcolor={colors.todoColor3}
              headingPL={4}
              headingPR={2}
              boxGap={1}
              listPL={9.5}
              todoList={todoList}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Calender;
