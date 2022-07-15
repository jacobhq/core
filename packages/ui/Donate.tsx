import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, ModalFooter, ButtonGroup, Link, Button, useDisclosure } from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useState } from "react";

export const Donate = forwardRef((props, ref) => {
    let [num, setNum] = useState(3)
    const { isOpen, onOpen, onClose } = useDisclosure()
    useImperativeHandle(ref, () => ({
        openModal() {
            onOpen()
        },
    }))

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading>{num}</Heading>
                        <Text>{num > 1 ? 'coffees' : 'coffee'}</Text>
                        <Slider aria-label='slider-ex-1' defaultValue={3} min={1} max={10} onChange={(val) => setNum(val)}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </ModalBody>

                    <ModalFooter>
                        <ButtonGroup>
                            <Link href={`https://buy.jacob.omg.lol/donate/${num}`} _hover={{ testDecoration: 'none' }}>
                                <Button colorScheme="blue">Donate {num} {num > 1 ? 'coffees' : 'coffee'}</Button>
                            </Link>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
})