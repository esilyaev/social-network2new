import { Button } from "@chakra-ui/button";
import React, { FC, useState } from "react";
import { TileType } from '../MineSweeper'



interface TileProps {
  content: TileType
}

const Tile: FC<TileProps> = ({ content }) => {
  const [clicked, setClicked] = useState(false)
  switch (content) {
    case TileType.BOMB:
      return (
        <Button onClick={() => setClicked(true)}
          colorScheme='teal' size='sm' width={'8%'} m={'1'}>
          {clicked && '💥'}
        </Button>
      )
    default:
      return (
        <Button onClick={() => setClicked(true)}
          colorScheme={clicked ? 'white' : 'teal'} size='sm' width={'8%'} m={'1'}>

        </Button>
      )
  }
}

export default Tile