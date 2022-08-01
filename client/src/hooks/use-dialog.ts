import { useState } from "react";

export const useDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return { isOpen, open, close };
};
