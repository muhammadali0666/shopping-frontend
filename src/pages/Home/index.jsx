import React from "react";
import { Hero } from "../../components/Hero";
import { Product } from "../../components/Product";
import { GameZone } from "../../components/GameZone";
import { Partner } from "../../components/Partner";
import { News } from "../../components/News";
import { Post } from "../../components/Post";
import { Layouts } from "../../components/Layouts";

export const Home = () => {
  return (
    <div className="home">
      <Layouts>
        <Hero />
        <Product />
        <GameZone />
        <Partner />
        <News />
        <Post />
      </Layouts>
    </div>
  );
};
