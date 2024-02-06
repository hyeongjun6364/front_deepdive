import React from 'react'
import EventForm from '../components/EventForm';
import { json,redirect } from 'react-router-dom';
function NewEventPage() {

  return (
    <EventForm/>
  )
}

export default NewEventPage

export async function action({request,params}){
  //request 객체에 폼데이터가 있음
  const data = await request.formData();
  const eventData = {
    title: data.get('title'),
    image:data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }
  data.get('');
  const response =await fetch('http://localhost:8080/events',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })

  if (!response.ok){
    throw json({message: 'Could not save event. '},{status: 500})
  }
  
  return redirect('/events')
}