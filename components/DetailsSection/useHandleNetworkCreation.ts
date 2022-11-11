import { MutableRefObject, useEffect } from "react";
//@ts-ignore
import { DataSet } from "vis-data/dist/umd";
//@ts-ignore
import { Network } from "vis-network/dist/vis-network";
import "vis-network/styles/vis-network.css";
import { WorkExperience } from "../ContentSection/WorkExperience/WorkSection";

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
                    { id: selectedDetails.company, label: selectedDetails.company, level: 0 },
                    ...selectedDetails.techStack.map((tech) => {
                        return { id: tech.name, label: tech.name, level: 1 };
                    }),
                ] as Node[];
            }
            function createEdges() {
                return [
                    ...selectedDetails.techStack.map((tech) => {
                        return { from: selectedDetails.company, to: tech.name, id: `${selectedDetails.company}${tech.name}` };
                    }),
                ] as Edge[];
            }
        }
    }, [graphContainer, selectedDetails]);
}

export default useHandleNetworkCreation;
