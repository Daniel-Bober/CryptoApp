<template>
<div class="nav-bar">

  <input class="search-bar" type="text" placeholder="Search">

  <div class="nav-buttons-group">
    <button><img src="../assets/icons/bell.svg" alt="bell icon"></button>
    <button><img src="../assets/icons/menu_stripes.svg" alt="menu icon"></button>
  </div>


</div>
</template>


<script lang='ts'>

export default {

  setup() {


    return {

    }
  }
}

</script>


<style lang='scss' scoped>
.nav-bar {
  width: 100%;
  height: 97px;
  padding: 49px 68px 0 68px;
  display: flex;
  justify-content: space-between;
  border: 1px solid tomato;

  .search-bar {
    width: 100%;
    max-width: 232px;
    height: 48px;
    padding: 12px 18px 12px 42px;
    font-size: $font-14px;
    border: none;
    border-radius: 8px;
    outline-color: $gray;
    background-color: $dirty-white;
    background-image: url('@/assets/icons/magnifier.svg');
    background-position: 18px 16px;
    background-repeat: no-repeat;
  }

  .search-bar::placeholder {
    color: $gray;
  }

  .nav-buttons-group {
    width: 112px;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;


    button {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      background-color: $dirty-white;
      padding: 0;
      transition: $time-hover-anim;
    }
  }
}
</style>