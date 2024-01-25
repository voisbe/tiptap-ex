import {StarterKit} from "@tiptap/starter-kit";
import {Paragraph} from "@tiptap/extension-paragraph";
import {Node, wrappingInputRule} from "@tiptap/vue-3";

export const PP = Node.create({
  name: 'pp',
  group: 'block',
  content: 'block*',

  addNodeView() {
    return ({node, HTMLAttributes, editor, getPos}) => {
      const container = document.createElement('div')
      container.setAttribute('adfd','dfafaf');

      container.addEventListener('click', event => {
        if (!editor.isEditable) {
          alert('clicked on the container')
        }
      })

      const content = document.createElement('div')
      content.setAttribute('ccc','ccc');
      container.append(content)
      return {
        dom: container,
        contentDOM: content,
      };
    }
  },
  addInputRules() {
    return [
      wrappingInputRule({
        find:  /^\s*(=)\s$/,
        type: this.type,

      }),
    ]
  },
})
