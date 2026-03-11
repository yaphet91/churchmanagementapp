import AdminLayout from '@/Layouts/AdminLayout';
import React, { useState, useEffect } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import EventForm from './EventForm';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NoDataFound from '@/Components/Miscellaneous/NoDataFound';
import { InertiaLink } from '@inertiajs/inertia-react';
import Tooltip2 from '@/utils/Tooltip2';
import { setSelectedEvent } from '@/features/event/eventSlice';
import { Inertia } from '@inertiajs/inertia';

const EventsAdmin = () => {
  const [isEventFormModalOpen, setIsEventFormModalOpen] = useState(false);
  const theme = useSelector((store) => store.theme.theme);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();

  const handleAddEvent = () => {
    setIsEventFormModalOpen(true);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    filterEvents();
  }, [startDate, endDate, events]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/events');
      setEvents(response.data);
      setFilteredEvents(response.data.reverse());
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEventClick = async (event) => {
    try {
      // const response = await axios.get(`/events/${event.id}`);
      dispatch(setSelectedEvent(event));
      Inertia.visit(`/events/${event.id}`, { event: event });

    } catch (error) {
      console.error(`Error fetching details for event ${event.id}:`, error);
    }
  };

  const filterEvents = () => {
    let filtered = events;
    if (startDate && endDate) {
      filtered = events.filter(event => {
        const eventStart = new Date(event.start_time);
        const eventEnd = new Date(event.end_time);
        return eventStart >= startDate && eventEnd <= endDate;
      });
    }
    setFilteredEvents(filtered.reverse());
  };

  return (
    <AdminLayout>
      <div className={`${theme === 'light' ? 'bg-white' : 'darkBg'} rounded-sm md:p-9 px-4 py-9 lg:min-h-[100vh]`}>
        <div>
          <button
            onClick={handleAddEvent}
            className='p-2 rounded-md flex items-center justify-center gap-2 border border-gray-400 hover:bg-gray-400 hover:text-black'>
            <GrAddCircle />
            Add Event
          </button>
        </div>

        <div className='flex items-center justify-center'>
          <h1 className='text-4xl font-semibold'>Events</h1>
        </div>

        <div className='flex space-x-4 my-4'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className='p-2 border rounded'
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="End Date"
            className='p-2 border rounded'
          />
        </div>

        {filteredEvents.length > 0 ? (
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
            {filteredEvents.map((event) => (
              <div key={event.id} onClick={() => handleEventClick(event)}
                className='h-[130px] w-[530px] flex items-start justify-start space-x-6 bg-gray-700 cursor-pointer'>
                <div className='w-[10px] h-full bg-green-600'></div>
                <div className='flex items-center p-4 justify-start space-x-6'>
                  <img src={event.image_url} alt="Event" className='rounded-md h-[90px] w-[120px]' />
                  <div className='flex flex-col items-start justify-start'>
                    <h1 className='text-xl capitalize'>{`${event.title}`}</h1>
                    <Tooltip2 className='italic' text={event.description? event.description: ''} maxLength={80} />
                    <h2 className='mt-2 font-bold'>From {event.start_time} to {event.end_time}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NoDataFound />
        )}
      </div>

      <EventForm isOpen={isEventFormModalOpen} onClose={() => setIsEventFormModalOpen(false)} onEventCreated={fetchEvents} />
    </AdminLayout>
  )
}

export default EventsAdmin;
