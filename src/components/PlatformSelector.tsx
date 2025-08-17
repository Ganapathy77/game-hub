import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms, { Platform } from "../hooks/usePlatForms";

interface Props {
  onSelectPlatforms: (platform: Platform) => void;
  selectedPlatform?: Platform | null;
}

const PlatformSelector = ({ onSelectPlatforms, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatForms();

  if (error) return null;

  if (isLoading)
    return (
      <Box paddingX={10}>
        {/* <Spinner /> */}
        <Menu>
          <Skeleton borderRadius={4} height="40px" width="132px" />
        </Menu>
      </Box>
    );
  return (
    <>
      <Box paddingX={10}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || "Platforms"}
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectPlatforms(platform)}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default PlatformSelector;
