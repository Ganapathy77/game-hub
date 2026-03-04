import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchRef.current) onSearch(searchRef.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={searchRef}
            borderRadius={20}
            variant="filled"
            placeholder="Search games..."
          />
          {searchRef.current?.value && (
            <InputRightElement
              children={
                <IoCloseCircleOutline
                  size={20}
                  cursor="pointer"
                  onClick={() => {
                    if (searchRef.current) {
                      searchRef.current.value = "";
                      onSearch(""); // 👈 reset search results
                    }
                  }}
                />
              }
            />
          )}
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
