import Head from "next/head";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import Image from "next/image";
import styles from "@/styles/Layout.module.css";
import { API_URL } from "@/config/index";

export default function Home({events}) {
  return <Layout>
<h1>Upcoming Events</h1>
{events.length === 0 && <h3>NO EVENTS TO SHOW </h3>}
{events.map(evt=>(
  <EventItem key={evt.id} evt={evt}>
  </EventItem>
))}
  </Layout>  
}
 export async function getStaticProps (){
  const res= await fetch(`${API_URL}/api/events`)
  const events=await res.json()

  return{
    props:{events},
    revalidate:1,  
 }
 }