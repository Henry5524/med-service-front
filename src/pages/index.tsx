import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Home from "./home";
import { useEffect, useState } from "react";
import axios from "axios";

// const inter = Inter({ subsets: ["latin"] });

export default function App() {
  // const [data, setData] = useState([]);

  // console.log(data);
  

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:1337/api/services'); // Change URL accordingly
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:1337/clinic');
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
