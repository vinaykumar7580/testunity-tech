import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
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
import { useSelector } from "react-redux";
import ApiInputForm from "../Components/ApiInputForm";
import { useState } from "react";
import RequestDetailsModal from "../Components/RequestDetailsModal";

function Dashboard() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectRequest, setSelectRequest] = useState(null);

  const { requests } = useSelector((store) => store.reducer);

  const searchRequests = requests?.filter((el) => {
    if (search) {
      return el?.config?.url?.toLowerCase().includes(search.toLowerCase());
    } else {
      return requests;
    }
  });

  const filterRequests = searchRequests?.filter((el) => {
    if (filter === "all") {
      return true;
    }

    const contentType = el.headers && el.headers["content-type"];

    if (contentType) {
      switch (filter) {
        case "application/json":
          return contentType.includes("application/json");
        case "text/css":
          return contentType.includes("text/css");
        case "application/javascript":
          return contentType.includes("application/javascript");
        case "text/html":
          return contentType.includes("text/html");
        case "font":
          return contentType.includes("font");
        case "image":
          return contentType.includes("image");
        case "media":
          return contentType.includes("media");
        case "other":
          return !(
            contentType.includes("application/json") ||
            contentType.includes("text/css") ||
            contentType.includes("application/javascript") ||
            contentType.includes("text/html") ||
            contentType.includes("font") ||
            contentType.includes("image") ||
            contentType.includes("media")
          );
        default:
          return true;
      }
    } else {
      return filter === "other";
    }
  });

  console.log("requests", requests);

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

        <Box>
          <ApiInputForm />
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
              <Input
                h={"20px"}
                placeholder="Filter url"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
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
              bg={filter == "all" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("all")}
            >
              All
            </Box>
            <Box h={"18px"} border={"1px solid #718096"}></Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
              bg={filter == "application/json" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("application/json")}
            >
              Fetch/XHR
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
              bg={filter == "text/html" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("text/html")}
            >
              Doc
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
              bg={filter == "text/css" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("text/css")}
            >
              CSS
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
              bg={filter == "application/javascript" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("application/javascript")}
            >
              JS
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
              bg={filter == "font" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("font")}
            >
              Font
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
              bg={filter == "image" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("image")}
            >
              Img
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
              bg={filter == "media" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("media")}
            >
              Media
            </Box>
            <Box
              border={"1px solid #718096"}
              p={"0px 7px"}
              borderRadius={"5px"}
              bg={filter == "other" ? "gray.500" : ""}
              cursor={"pointer"}
              onClick={() => setFilter("other")}
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
        {requests.length == 0 ? (
          <Box h={"300px"} position={"relative"}>
            <Box position={"absolute"} top={"80%"} left={"30%"}>
              <Text>Recording network activity.....</Text>
              <Text>Perform a request or hit Ctrl+R to record the reload.</Text>
              <Link color={"blue"}>Learn More</Link>
            </Box>
          </Box>
        ) : (
          <Box overflowX="auto" maxH="calc(100vh - 175px)">
            <Table size="sm">
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
                {filterRequests &&
                  filterRequests?.map((request, index) => (
                    <Tr key={index}>
                      <Td fontSize={"12px"}>
                        {request?.config?.method?.toUpperCase()}
                      </Td>
                      <Td maxW={"400px"} fontSize={"12px"}>
                        {request?.config?.url}
                      </Td>
                      <Td fontSize={"12px"}>{request?.type}</Td>
                      <Td fontSize={"12px"}>{request?.status}</Td>
                      <Td fontSize={"12px"}>{request?.duration} ms</Td>
                      <Td
                        fontSize={"12px"}
                        onClick={() => setSelectRequest(request)}
                        cursor={"pointer"}
                      >
                        Details
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
            {selectRequest && (
              <RequestDetailsModal
                request={selectRequest}
                onClose={() => setSelectRequest(null)}
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
export default Dashboard;
