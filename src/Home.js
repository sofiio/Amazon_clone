import React from "react";
import Header from "./Header";
import "./Home.css";
import { useState } from "react";
import Product from "./Product";


function Home() {


  const [searchTerm, setSearchTerm] = useState("");

  const products =[
     {
      id:"123456",
      price:10.5,
      rating:7,
      image:"https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id:"123456",
      price:15,
      rating:5,
      image:"https://media.istockphoto.com/id/1158413597/photo/composition-with-books-on-the-table.jpg?s=612x612&w=0&k=20&c=oLTBwtJuiWQTv6NPYOc3iE3biVlp8LI7O6HX1p7WlKs=",
      title:"It has survived not only five centuries, but also the leap into electronic typesetting."
    },
    {
      id:"123456",
      price:22,
      rating:3,
      image:"https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
      title:"remaining essentially unchanged. It was popularised in the 1960s with the release of"
    },
    {
      id:"123456",
      price:45,
      rating:12,
      image:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg",
      title:"Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
    },
    {id:"123456",
    price:17,
    rating:9,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
    title:"publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]



  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="home">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg"
        />
        <div className="home_row">

        {products.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } 
          }).map((val, key) => (<div>
             <div className="home_row">
              <Product
              id={val.id}
              title={val.title}
              image={val.image}
              rating={val.rating}
              price={val.price}
              />
             </div>
       
          </div>))}
        </div>
        
        

      </div>
      
    </div>
      
  );
}

export default Home;
