/* eslint-disable max-len */
import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(() => '');

export default createRule({
  name: 'no-raw-text',
  meta: {
    type: 'problem', // Mark this rule as a problem
    docs: {
      description:
        'Disallow raw text inside <UView>, text should be wrapped with <UText>.',
    },
    messages: {
      rawText:
        'Raw text inside <UView> is not allowed. Please wrap it with <UText>.',
    },
    schema: [], // No options for this rule
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXElement(node: TSESTree.JSXElement) {
        // Check if the element is <UView>
        if (
          node.openingElement.name.type === 'JSXIdentifier' &&
          node.openingElement.name.name === 'UView'
        ) {
          // Iterate through all child nodes of <UView>
          node.children.forEach((child) => {
            // Check if the child node is a text node
            if (child.type === 'JSXText' && child.value.trim() !== '') {
              context.report({
                node: child, // Report the node that violates the rule
                messageId: 'rawText', // Use the message defined earlier
              });
            }
          });
        }
      },
    };
  },
});
