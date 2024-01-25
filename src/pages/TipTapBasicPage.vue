<script setup>
import {EditorContent, mergeAttributes, Node, useEditor, VueNodeViewRenderer} from "@tiptap/vue-3";
import {StarterKit} from "@tiptap/starter-kit";
import {PP} from "components/tiptap-extensions/clickable";
import {CustomListItem} from "components/tiptap-extensions/item";
const editor = useEditor({
  editable: true,
  extensions: [
    StarterKit,
    PP,
    CustomListItem
  ],
  content: '<custom-list-item>Item 1</custom-list-item><custom-list-item>Item 2</custom-list-item>'
})

const handle = () => {
  const {state, view } = editor.value;
  const {$from, to } = state.tr.selection;
  console.log(state.doc.nodeAt($from.pos).childCount);
  console.log($from.node($from.depth).resolve().depth);
}
</script>
<template>
  <q-page padding>
    <q-card class="q-pa-lg q-ma-lg">
      <editor-content :editor="editor"/>
    </q-card>
    <q-btn class="" color="primary" @click="handle">clicked dfaafasfas</q-btn>
    <div class="fit bg-primary"></div>
  </q-page>
</template>

<style >
.tiptap:focus {
  outline: none;
}
</style>
