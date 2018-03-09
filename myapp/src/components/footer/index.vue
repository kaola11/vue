<template>
  <footer>
    <ul>
    	<router-link v-for="(item,index) in list" :to="item.path" :key="index" tag="li">
    		<i class="iconfont" :class="item.icon"></i>
    		<i>{{item.name}}</i>
    		</router-link>
    </ul>
  </footer>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>