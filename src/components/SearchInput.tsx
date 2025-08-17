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
  const serchRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (serchRef.current) onSearch(serchRef.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={serchRef}
            borderRadius={20}
            variant="filled"
            placeholder="Search games..."
          />
          {serchRef.current?.value && (
            <InputRightElement
              children={
                <IoCloseCircleOutline
                  size={20}
                  cursor="pointer"
                  onClick={() => {
                    if (serchRef.current) {
                      serchRef.current.value = "";
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
