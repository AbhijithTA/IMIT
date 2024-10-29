import React from 'react';
import eventImage1 from '../assets/events1.png';
import eventImage2 from '../assets/events2.png';
import eventImage3 from '../assets/events3.png';

const EventsSection = () => {
  return (
    <section className="px-8 py-16 lg:px-24 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Events</h2>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Event Card 1 */}
        <div className="flex flex-col items-center text-center max-w-[421px] w-full h-auto lg:h-[435px] mx-auto">
          <img
            src={eventImage1}
            alt="Event 1"
            className="w-full h-auto max-h-[350px] object-cover rounded-md"
          />
          <p className="text-gray-500 mt-4">Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        {/* Event Card 2 */}
        <div className="flex flex-col items-center text-center max-w-[421px] w-full h-auto lg:h-[435px] mx-auto">
          <img
            src={eventImage2}
            alt="Event 2"
            className="w-full h-auto max-h-[350px] object-cover rounded-md"
          />
          <p className="text-gray-500 mt-4">Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        {/* Event Card 3 */}
        <div className="flex flex-col items-center text-center max-w-[421px] w-full h-auto lg:h-[435px] mx-auto">
          <img
            src={eventImage3}
            alt="Event 3"
            className="w-full h-auto max-h-[350px] object-cover rounded-md"
          />
          <p className="text-gray-500 mt-4">Lorem Ipsum is simply dummy text of the printing</p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
