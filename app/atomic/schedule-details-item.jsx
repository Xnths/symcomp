
import { useMediaQuery } from "@mui/material";
import React from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../components/ui/drawer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";

/**
 * Component to display a navigation item given a section it should direct the user to.
 * @param {Object} props - The component's properties.
 * @param {boolean} props.onAir - Attribute true if the presenatation is happening right now or false otherwise.
 * @param {string} props.time - Presentation's time in the format "hh:mm - hh:mm".
 * @param {string} props.theme - Presentation's theme.
 * @param {string} props.title - Presentation's title.
 * @param {string} props.lecturer - Presentation's lecturer.
 * @returns {JSX.Element} Atomic schedule item containing the presentation briefs.
 */
export default function ScheduleDetailsItem (props) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <Dialog>
                <DialogTrigger>
                    <div className="flex flex-col items-center w-screen px-4">
                        <div className="flex flex-col lg:w-[600px] w-full border-4 border__shadow px-8 py-4 text-left">
                            <div className="mb-4">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold">{props.title}</span>
                                    <span className="text-2xl">{props.lecturer}</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-end mb-2">
                                <div className="text-4xl font-bold bg-secondary text-white text-center w-fit px-4 py-2 border__shadow">
                                    {props.time}
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className="overflow-scroll">
                        <DialogTitle>
                            <div className="text-4xl mb-4">{props.title}</div>
                        </DialogTitle>
                        <div className="mb-8">
                            <h2 className="text-2xl">Descrição</h2>
                            <DialogDescription>
                                <div className="text-lg">
                                    {props.description}
                                </div>
                            </DialogDescription>
                        </div>
                        <div>
                            <h2 className="text-2xl">Sobre o palestrante</h2>
                            <DialogDescription>
                                <div className="text-lg">
                                    {props.aboutLecturer}
                                </div>
                            </DialogDescription>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer>
            <DrawerTrigger>
                <div className="flex flex-col items-center w-screen px-4">
                    <div className="flex flex-col lg:w-[600px] w-full border-4 border__shadow px-8 py-4 text-left">
                        <div className="mb-4">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold">{props.title}</span>
                                <span className="text-2xl">{props.lecturer}</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-end mb-2">
                            <div className="text-4xl font-bold bg-secondary text-white text-center w-fit px-4 py-2 border__shadow">
                                {props.time}
                            </div>
                        </div>
                    </div>
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="overflow-scroll">
                    <DrawerTitle>
                        <div className="text-4xl mb-4">{props.title}</div>
                    </DrawerTitle>
                    <div>
                        <h2 className="text-2xl">Descrição</h2>
                        <DrawerDescription>
                            <div className="text-lg">
                                {props.description}
                            </div>
                        </DrawerDescription>
                    </div>
                    <div>
                        <h2 className="text-2xl">Sobre o palestrante</h2>
                        <DrawerDescription>
                            <div className="text-lg">
                                {props.aboutLecturer}
                            </div>
                        </DrawerDescription>
                    </div>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
}