<template>
  <div class="tag-input-component">
    <div v-for="(tag, index) in tags" :key="tag" class="tag-input__tag">
      <span class="mr-2 text-danger" @click="removeTag(index)">&times;</span>
      {{ tag }}
    </div>
    <input type="text"
           placeholder="Enter a Tag"
           class="form-control tag-input__text w-100 bg-white my-2 rounded"
           @keydown.enter="addTag"
           @keydown.space="addTag"
           @keydown.delete="removeLastTag"
    />
  </div>
</template>
<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      tags: computed(() => AppState.searchTags),
      addTag(event) {
        event.preventDefault()
        var val = event.target.value.trim().toLowerCase()
        if (val.length > 0) {
          this.tags.push(val)
          event.target.value = ''
        }
      },
      removeTag(index) {
        this.tags.splice(index, 1)
      },
      removeLastTag(event) {
        if (event.target.value.length === 0) {
          this.removeTag(this.tags.length - 1)
        }
      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.tag-input {
  width: 100%;
  border: 1px solid rgb(131, 196, 129);
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tag-input__tag {
  height: 30px;
  float: left;
  margin: .5vh;
  border: 1px solid rgb(131, 196, 129);
  line-height: 30px;
  padding: 0 1vh;
  border-radius: 3px;
  display: flex;
  align-items: center;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input__text {
  border: 1px solid #ccd0d3;
  outline: none;
  font-size: 1em;
  line-height: 35px;
  background: none;
  padding: 6px 12px;
}
</style>
