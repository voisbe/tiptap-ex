import {mergeAttributes, Node, VueNodeViewRenderer} from "@tiptap/vue-3";
import CustomListItemComponent from "components/tiptap-extensions/CustomListItemComponent.vue";

export const CustomListItem = Node.create({
  name: "customListItem",

  content: 'paragraph*',

  addNodeView() {
    return VueNodeViewRenderer(CustomListItemComponent)
  },

  group: 'block',

  draggable: false,
  parseHTML() {
    return [
      {
        tag: 'custom-list-item',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['custom-list-item', mergeAttributes(HTMLAttributes), 0]
  },
  addAttributes() {
    return {
      selected: {
        default: false,
      }
    };
  }
});
