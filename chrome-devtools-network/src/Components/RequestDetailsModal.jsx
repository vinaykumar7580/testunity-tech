import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

function RequestDetailsModal({ request, onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent minWidth="60%">
        <ModalHeader>Request Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text fontWeight={"bold"}>Headers:</Text>
            <Text>{JSON.stringify(request?.headers, null, 2)}</Text>
          </Box>
          <Box mt={"10px"}>
            <Text fontWeight={"bold"}>Response:</Text>
            <Text>{JSON.stringify(request?.data, null, 2)}</Text>
          </Box>
          <Box mt={"10px"}>
            <Text fontWeight={"bold"}>Timing:</Text>
            <Text>{request?.duration} ms</Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RequestDetailsModal;
