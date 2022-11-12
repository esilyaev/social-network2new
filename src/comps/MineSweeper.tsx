import { Flex } from "@chakra-ui/layout";
import React, { FC, useState } from "react";
import Tile from "./MineSweeper/Tile";

export enum TileType {
  EMPTY,
  BOMB
}

const size = 10
const mineCount = 10
const minePlaces = Array(mineCount)
const GameMap: TileType[] = Array(size * size)
const fillMap = () => {
  for (let i = 0; i < mineCount; i++) {
    minePlaces.push(Math.floor(Math.random() * size * size))
  }
  for (let index = 0; index < GameMap.length; index++) {
    if (minePlaces.includes(index)) {
      GameMap[index] = TileType.BOMB
    } else {
      GameMap[index] = TileType.EMPTY
    }

  }
}

fillMap()

const GameBoard = GameMap.map((type, index) => <Tile content={type} key={index} />)


const MineSweeper: FC = () => {
  const [showContent, setShowContent] = useState(false)
  return (
    <div className="game-container">
      <div>Mine sweeper here...</div>
      <Flex color="white" wrap={'wrap'} justify='center' mt={'4'}>
        {GameBoard}
      </Flex>


    </div>

  )
}

export default MineSweeper