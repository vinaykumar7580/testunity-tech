import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import axiosInstance from "./interceptor";

function ApiInputForm() {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (url) {
      axiosInstance
        .get(url)
        .then((response) => {
          console.log("response:", response);
        })
        .catch((error) => {
          console.error("error:", error);
        });
    }
    setUrl("");
  };

  return (
    <Box
      p={"5px"}
      border={"1px solid #718096"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Box
        w={"70%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5px"}
      >
        <Input
          h={"25px"}
          fontSize={"sm"}
          type="text"
          placeholder="Enter web url's"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          borderRadius={"5px"}
          pl={"5px"}
        />

        <Button
          h={"25px"}
          fontSize={"sm"}
          colorScheme="purple"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
      <Box></Box>
    </Box>
  );
}
export default ApiInputForm;
