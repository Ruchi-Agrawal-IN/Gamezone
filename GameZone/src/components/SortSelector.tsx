import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSortOrderSelection: (sortOrder: string) => void;
  selectedSortOrder: string;
}
const SortSelector = ({ onSortOrderSelection, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        fontSize="lg"
        marginBottom={3}
      >
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((so) => (
          <MenuItem
            key={so.value}
            value={so.value}
            onClick={() => onSortOrderSelection(so.value)}
          >
            {so.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
