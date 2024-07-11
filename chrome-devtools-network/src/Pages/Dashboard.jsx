import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaFilter, FaRegStopCircle } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { MdArrowDropDown, MdWifiPassword } from "react-icons/md";
import { HiMiniArrowDownTray, HiMiniArrowUpTray } from "react-icons/hi2";
import { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../Components/interceptor";

function Dashboard() {
  const [url, setUrl] = useState("");

  const { requests } = useSelector((store) => store.reducer);

  const handleSubmit = () => {
    if (url) {
      axiosInstance.get(url);
    }

    setUrl("");
  };

  console.log("data", requests);

  return (
    <Box
      h={"100vh"}
      bg={"black"}
      color={"white"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      {/* box first which take url */}
      <Box w={"40%"} h={"100vh"} p={"50px"}>
        <Box p={"20px"} border={"1px solid #718096"} borderRadius={"10px"}>
          <Heading color={"orange"} fontFamily={"serif"}>
            Chrome DevTools
          </Heading>
          <Box mt={"30px"}>
            <FormControl>
              <FormLabel>Web URLs</FormLabel>
              <Input
                type="email"
                placeholder="Enter web url's"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
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
      </Box>
      {/* box second which is network box */}
      <Box w={"60%"} h={"100vh"} boxShadow={"md"} border={"1px solid #718096"}>
        {/* heading box */}
        <Box
          bg={"gray.700"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"1px"}
        >
          <Box></Box>
          <Box borderBottom={"1px solid #90CAF9"} p={"2px 10px"}>
            <Text color={"blue.200"}>Network</Text>
          </Box>
          <Box></Box>
        </Box>

        <Box
          border={"1px solid #718096"}
          p={"3px 10px"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Box>
              <FaRegStopCircle color="red" />
            </Box>
            <Box>
              <AiOutlineStop />
            </Box>
          </Box>
          <Box h={"18px"} border={"1px solid #718096"}></Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Box>
              <FaFilter color="red" size={"14px"} />
            </Box>
            <Box>
              <IoIosSearch size={"18px"} />
            </Box>
          </Box>
          <Box h={"18px"} border={"1px solid #718096"}></Box>
          <Box>
            <Checkbox size="md" colorScheme="blue" defaultChecked>
              Preserve log
            </Checkbox>
          </Box>
          <Box h={"18px"} border={"1px solid #718096"}></Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Box>
              <Checkbox size="md">Disable cache</Checkbox>
            </Box>
            <Box>
              <Text>No throttling</Text>
            </Box>
            <Box>
              <MdArrowDropDown size={"22px"} />
            </Box>
            <Box>
              <MdWifiPassword />
            </Box>
          </Box>
          <Box h={"18px"} border={"1px solid #718096"}></Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Box>
              <HiMiniArrowUpTray />
            </Box>
            <Box>
              <HiMiniArrowDownTray />
            </Box>
          </Box>
        </Box>

        <Box
          p={"3px 10px"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Box>
              <Input h={"20px"} placeholder="Filter" />
            </Box>
            <Box>
              <Checkbox size="md">Invert</Checkbox>
            </Box>
          </Box>
          <Box h={"18px"} border={"1px solid #718096"}></Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Box>
              <Checkbox size="md">Hide data URLs</Checkbox>
            </Box>
            <Box>
              <Checkbox size="md">Hide extension URLs</Checkbox>
            </Box>
          </Box>
        </Box>

        <Box
          p={"3px 10px"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"10px"}
          fontSize={"12px"}
          borderBottom={"1px solid #718096"}
          pb={"5px"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              All
            </Box>
            <Box h={"18px"} border={"1px solid #718096"}></Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              Fetch/XHR
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              Doc
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              CSS
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              JS
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              Font
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              Img
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              Media
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
            >
              Other
            </Box>
          </Box>
          <Box></Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Box>
              <Checkbox size="sm">Blocked response cookies</Checkbox>
            </Box>
            <Box>
              <Checkbox size="sm">Blocked requests</Checkbox>
            </Box>
            <Box>
              <Checkbox size="sm">3rd-party requests</Checkbox>
            </Box>
          </Box>
        </Box>

        {/* request showing */}
        <Box overflowX="auto"
          maxH="calc(100vh - 130px)">
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th color={"white"}>Method</Th>
                <Th color={"white"}>URL</Th>
                <Th color={"white"}>Type</Th>
                <Th color={"white"}>Status</Th>
                <Th color={"white"}>Duration</Th>
                <Th color={"white"}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {requests &&
                requests?.map((request, index) => (
                  <Tr key={index} >
                    <Td fontSize={"12px"}>{request?.config?.method?.toUpperCase()}</Td>
                    <Td maxW={"400px"} fontSize={"12px"}>{request?.config?.url}</Td>
                    <Td fontSize={"12px"}>{request.type}</Td>
                    <Td fontSize={"12px"}>{request?.status}</Td>
                    <Td fontSize={"12px"}>{request?.duration} ms</Td>
                    <Td fontSize={"12px"}>Details</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
export default Dashboard;
