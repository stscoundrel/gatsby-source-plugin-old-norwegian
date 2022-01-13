/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getEntries } from './services/dictionary';
import { parseGatsbyNodes } from './services/datalayer';

/**
 * Main Gatsby hook for creating nodes to datalayer.
 */
export const sourceNodes = (
  { actions, createNodeId, createContentDigest },
) => {
  const { createNode } = actions;

  const dictionary = getEntries();
  const nodes = parseGatsbyNodes(dictionary, createNodeId, createContentDigest);

  nodes.forEach((node) => {
    createNode(node);
  });
};

export default {
  sourceNodes,
};
