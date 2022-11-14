import { MutableRefObject, useEffect } from "react";
//@ts-ignore
import { DataSet } from "vis-data/dist/umd";
//@ts-ignore
import { Network } from "vis-network/dist/vis-network";
import "vis-network/styles/vis-network.css";
import { WorkExperience } from "../../data";

interface Node {
    id: string;
    label: string;
    level: number;
}
interface Edge {
    from: string;
    to: string;
    id: string;
}

const graphOptions = {
    interaction: {
        dragNodes: false,
        dragView: false,
        hideEdgesOnDrag: false,
        hideEdgesOnZoom: false,
        hideNodesOnDrag: false,
        hover: false,
        hoverConnectedEdges: false,
        selectable: false,
        selectConnectedEdges: false,
        zoomView: false,
    },
    nodes: {
        borderWidth: 0,
        shape: "text",
        font: {
            color: "#343434",
            size: 18, // px
            face: "arial",
            background: "#F0EEEC",
            strokeWidth: 20, // px
            strokeColor: "#F0EEEC",
            align: "top",
            multi: false,
            vadjust: -5,
        },
    },
    layout: {
        improvedLayout: true,
        hierarchical: {
            enabled: true,
            levelSeparation: 250,
            nodeSpacing: 100,
            treeSpacing: 200,
            blockShifting: true,
            edgeMinimization: true,
            parentCentralization: true,
            direction: "UD", // UD, DU, LR, RL
            sortMethod: "hubsize", // hubsize, directed
            shakeTowards: "leaves", // roots, leaves
        },
    },
    edges: {
        smooth: {
            enabled: true,
            type: "cubicBezier",
            forceDirection: "vertical",
            roundness: 0.8,
        },
        color: {
            color: "#12100E",
            opacity: 1.0,
        },
        width: 1.2,
        shadow: {
            enabled: false,
            color: "rgba(0,0,0,0.3)",
            size: 10,
            x: 3,
            y: 3,
        },
    },
};

function useHandleNetworkCreation(
    graphNetworkState: [Network, (v: Network) => void],
    graphContainer: MutableRefObject<null | HTMLDivElement>,
    selectedDetails: WorkExperience
) {
    const [graphNetworkHandler, setGraphNetworkHandler] = graphNetworkState;

    useEffect(() => {
        if (!graphContainer.current) return;

        destroyNetworkOnDataChange();

        createNewNetwork();

        function destroyNetworkOnDataChange() {
            if (graphNetworkHandler) graphNetworkHandler.destroy();
        }

        function createNewNetwork() {
            const nodes: Node[] = createNodes();
            const edges: Edge[] = createEdges();

            const network = new Network(graphContainer.current, { nodes: new DataSet<Node>(nodes), edges: new DataSet<Edge>(edges) }, graphOptions);

            setGraphNetworkHandler(network);

            function createNodes() {
                return [
                    {
                        id: selectedDetails.company,
                        label: "Tech Used",
                        level: 0,
                        shape: "text",
                        font: {
                            size: 35, // px
                        },
                    },
                    ...selectedDetails.techStack.map((tech) => {
                        return { id: tech.label, label: tech.label, level: 1 };
                    }),
                ] as Node[];
            }
            function createEdges() {
                return [
                    ...selectedDetails.techStack.map((tech) => {
                        return { from: selectedDetails.company, to: tech.label, id: `${selectedDetails.company}${tech.label}` };
                    }),
                ] as Edge[];
            }
        }
    }, [graphContainer, selectedDetails]);
}

export default useHandleNetworkCreation;
