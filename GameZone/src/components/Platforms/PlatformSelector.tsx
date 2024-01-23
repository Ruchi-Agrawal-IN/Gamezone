import { Button, MenuButton, Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "./usePlatforms";
interface Props {
  onPlatformSelection: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onPlatformSelection, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        fontSize="lg"
        marginBottom={3}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem key={p.id} onClick={() => onPlatformSelection(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
