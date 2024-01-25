<template>
  <NodeViewWrapper>
    <div class="custom-li-style" :class="{selected:props.node.attrs.selected}"    @click="selectItem">
      <span> ①  </span>
    <node-view-content class="content" />
    </div>

  </NodeViewWrapper>
</template>

<script setup>

import {NodeViewWrapper, nodeViewProps, NodeViewContent} from "@tiptap/vue-3";

const props = defineProps(nodeViewProps);
const selectItem = () =>
{
  console.log(props.node.attrs.selected);
  // 현재 노드를 선택하도록 설정합니다.
  props.updateAttributes({
    selected: !props.node.attrs.selected,
  });
}

</script>

<style>
.selected {
  color: red
}
li {
  cursor: pointer;
}
</style>
