import { Button } from "@chakra-ui/button";
import React, { FC } from "react";
import { TileType } from '../MineSweeper'



interface TileProps {
  content: TileType
}

const Tile: FC<TileProps> = ({ content }) => {
  switch (content) {
    case TileType.BOMB:
      return (
        <Button colorScheme='teal' size='sm' width={'8%'} m={'1'}>
          💥
        </Button>
      )
    default:
      return (
        <Button colorScheme='teal' size='sm' width={'8%'} m={'1'}>

        </Button>
      )
  }
}

export default Tile