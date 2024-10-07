"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { MdOutlineTextsms } from "react-icons/md";

export default function ContactButton() {
  // const { ref } = useSectionInView("Contact");
  const { isOpen, onOpen, onOpenChange } = useDisclosure(); // Handle modal state

  return (
    <>
      {/* Floating button in bottom-right corner */}
      <Button
        onPress={onOpen}
        // auto
        className="fixed bottom-4 right-4 z-50 bg-primary shadow-lg rounded-full p-3"
      >
        <MdOutlineTextsms className="text-2xl" /> {/* Message icon here */}
      </Button>

      {/* Modal with contact form */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact me
              </ModalHeader>
              <ModalBody>
                <p className="text-gray-700 text-sm font-semibold">
                  For project inquiries or collaboration opportunities, feel
                  free to send a message through this form.
                </p>
                <form
                  className="mt-4 flex flex-col"
                  action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                      toast.error(error);
                      return;
                    }

                    toast.success("Email sent successfully!");
                    onClose();
                  }}
                >
                  <Input
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                    variant="bordered"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                    className="mt-4"
                  />
                  <SubmitBtn />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
