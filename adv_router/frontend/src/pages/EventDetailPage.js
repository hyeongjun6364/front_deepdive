import React from 'react'
import { useParams, json, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem';
function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

  return (
    <>
      <EventItem event={data.event} />
    </>
  )
}

export default EventDetailPage

export async function loader({request, params}){
  const id = params.eventId;
  console.log(params)
  const response = await fetch(`http://localhost:8080/events/`+id);
  
  if(!response.ok){
    throw {message: 'Could not fetch events.'}
  }
  else{
    return response
  }
}