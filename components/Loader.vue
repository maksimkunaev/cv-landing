<template>
  <div class="lds-ripple"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  }      
</script>

<style lang="stylus" scoped>

.lds-ripple {
    background: #9e9e9e;
    width: 15px;
    height: 15px;
    opacity: 1;
    border-radius: 50%;
    animation: rotatin 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    margin-left: 8px;
  }

  .loading .lds-ripple {
    display: inline-block;
  }

  @keyframes rotatin {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }     
</style>