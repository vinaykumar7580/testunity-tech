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
  const [method, setMethod] = useState("GET");

  const handleSubmit = async () => {
    if (url) {
      try {
        let response;
        switch (method) {
          case "GET":
            response = await axiosInstance.get(url);
            break;
          case "POST":
            response = await axiosInstance.post(url);
            break;
          case "PUT":
            response = await axiosInstance.put(url);
            break;
          case "PATCH":
            response = await axiosInstance.patch(url);
            break;
          case "DELETE":
            response = await axiosInstance.delete(url);
            break;
          default:
            throw new Error("Unsupported request");
        }
      } catch (error) {
        console.error("Error request:", error);
      }
    }
    setUrl("");
  };

  return (
    <Box p={"20px"} border={"1px solid #718096"} borderRadius={"10px"}>
      <Heading color={"orange"} fontFamily={"serif"}>
        Chrome DevTools
      </Heading>
      <Box mt={"30px"}>
        <FormControl>
          <FormLabel>Web URLs</FormLabel>
          <Input
            bg={"white"}
            color={"black"}
            type="text"
            placeholder="Enter web url's"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Request Method</FormLabel>
          <Select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            bg={"white"}
            color={"black"}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </Select>
        </FormControl>
        <Box
          mt={"20px"}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Button colorScheme="purple" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default ApiInputForm;
