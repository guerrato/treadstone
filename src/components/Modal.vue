<template>
  <div class="v-modal" :id="id">
    <div class="dialog-wrap">
      <div class="v-modal-dialog">
        <div class="modal-content">
          <div class="modal-header" v-if="modalTitle && modalTitle.trim() !== '' && modalTitle !== null">
            <button type="button" class="close" aria-label="Close" @click="$emit('close')">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">{{ modalTitle }}</h4>
          </div>
          <div class="modal-body">
            <slot>
            </slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" @click="$emit('close')">Close</button>
            <button type="button" class="btn btn-primary" @click="redirect()">{{ modalLinkText }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'modalTitle',
    'modalLinkText',
    'modalLink'
  ],
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    redirect () {
      console.log(this.modalLink)
      if (!this.modalLink || this.modalLink.trim() === '' || this.modalLink == null) {
        return false
      }
      this.$router.push(this.modalLink)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    /* display: none; */
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    background: rgba(0,0,0,0.3);

    .dialog-wrap {
      display: block;
      width: auto;
      height: 100%;
      margin: 10px;

      .v-modal-dialog {
        position: relative;
        width: auto;
      }
    }

    @media (min-width: 768px) {
      .dialog-wrap {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        height: 100%;

        .v-modal-dialog {
          width: 600px;
          min-width: 600px;
          margin: 0 0;
        }
      }
    }
  }
</style>
