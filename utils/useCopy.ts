import { useCopyToClipboard } from "usehooks-ts";

const useCopy = () => {
    const [copiedValue, copy] = useCopyToClipboard();

    const handleCopy = (valueToCopy: string) => () => {
        const msgToPrint = `Copied to clipboard`;
        copy(valueToCopy);
    };

    return handleCopy;
};

export default useCopy;
