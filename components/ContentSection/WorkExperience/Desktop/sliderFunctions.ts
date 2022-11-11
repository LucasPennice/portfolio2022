import { ContentSections } from "../..";

export function calculateLeftPercentage(currentContentSection: ContentSections, showLogo: boolean) {
    let leftPercentage = 0;
    if (currentContentSection === ContentSections.work) {
        leftPercentage = 8.5;
    }
    if (currentContentSection === ContentSections.about) {
        leftPercentage = 27.8;
    }
    if (currentContentSection === ContentSections.forDevs) {
        leftPercentage = 59.6;
    }
    if (currentContentSection === ContentSections.contact) {
        leftPercentage = 82;
    }
    const operation = leftPercentage > 50 ? "+" : "-";

    return showLogo ? `calc(${leftPercentage}% ${operation} 50px)` : `${leftPercentage}%`;
}

export function calculateWidth(currentContentSection: ContentSections) {
    if (currentContentSection === ContentSections.work) {
        return "88px";
    }
    if (currentContentSection === ContentSections.about) {
        return "95px";
    }
    if (currentContentSection === ContentSections.forDevs) {
        return "126px";
    }
    return "116px";
}
