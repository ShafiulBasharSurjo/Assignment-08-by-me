import React from "react";
import Marquee from "react-fast-marquee";

const newTiles = [
  {
    id: "tile_001",
    title: "Ceramic Blue Tile",
    description: "Premium ceramic tile with elegant blue glaze finish",
  },
  {
    id: "tile_002",
    title: "Wood Look Porcelain Plank",
    description: "Realistic light oak wood effect porcelain tile",
  },
  {
    id: "tile_003",
    title: "Marble Effect White Tile",
    description:
      "Luxurious white marble look porcelain tile with subtle veining",
  },
  {
    id: "tile_004",
    title: "Grey Matte Ceramic Tile",
    description: "Modern matte finish grey ceramic wall and floor tile",
  },
];

const NewArrivals = () => {
  return (
    <>
      <div className="bg-linear-to-r from-zinc-950 to-black py-4 border-b border-amber-600/30 overflow-hidden flex justify-between items-center gap-4">
        <button className="btn bg-blue-950 text-white ">NEW ARRIVALS :</button>
        <Marquee
          className="text-amber-100 text-sm font-medium tracking-wide"
          behavior="scroll"
          direction="left"
          scrollamount="7"
          scrolldelay="40"
          pauseOnHover={true}
        >
          {newTiles.map((tile) => (
            <span key={tile.id} className="mx-4">
              🌟{tile.title}🌟 Weekly Feature: {tile.description}. Join Our
              Community — Get Exclusive Offers & Interior Design Tips
              &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; ✨ Free Shipping on All
              Orders Over $250 | Visit Showroom in Dhaka ✨
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default NewArrivals;
