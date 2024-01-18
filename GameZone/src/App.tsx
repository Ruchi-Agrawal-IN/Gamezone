import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/Games/GamesGrid";
import GenreList from "./components/Genre/GenreList";
import { useState } from "react";
import { Genre } from "./components/Genre/useGenre";
import PlatformSelector from "./components/Platforms/PlatformSelector";
import { Platform } from "./components/Platforms/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base: `1fr`,
          lg: `200px 1fr`,
        }}
        gap={4}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onGenreSelection={(g) => setSelectedGenre(g)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            onPlatformSelection={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
          <GamesGrid
            selectedGenre={selectedGenre}
            selectedPlatForm={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
